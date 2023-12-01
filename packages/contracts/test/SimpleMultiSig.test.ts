import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture, } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { encodeFunctionData, getAddress, hexToSignature, keccak256, parseEther, toHex, WalletClient } from 'viem'

const sha3 = (value: string | number | bigint | boolean | Uint8Array) => keccak256(toHex(value))

const accSort = (a: WalletClient, b: WalletClient) => {
  return a.account?.address! > b.account?.address! ? 1 : -1
}

describe('SimpleMultiSig',  () => {
  let owners: `0x${string}`[] = []
  const threshold = BigInt(2)

  async function deployFixture() {
    const [owner, secondAccount, thirdAccount] = await hre.viem.getWalletClients()

    owners = [owner.account.address, secondAccount.account.address, thirdAccount.account.address].sort()

    // console.log('owners', owners)

    const contract = await hre.viem.deployContract(
      'SimpleMultiSig',
      [threshold, owners, BigInt(1)]
    )

    const testRegistry = await hre.viem.deployContract(
      'TestRegistry',
      []
    )

    await owner.sendTransaction({
      account: owner.account,
      to: contract.address,
      value: parseEther('1')
    })

    const publicClient = await hre.viem.getPublicClient()

    return {
      contract,
      testRegistry,
      owner,
      secondAccount,
      thirdAccount,
      publicClient,
    }
  }

  const createSigs = async (signers: WalletClient[],
                      multisigAddr: `0x${string}`,
                      nonce: bigint,
                      destination: `0x${string}`,
                      value: bigint,
                      data: `0x${string}`,
                      executor: `0x${string}`,
                      gasLimit: bigint
  ) => {
    let sigV: number[] = []
    let sigR: `0x${string}`[] = []
    let sigS: `0x${string}`[] = []

    for (let i = 0; i < signers.length; i++) {
      // console.log('signers[i]', signers[i].account!.address)
      const signature = await signers[i].signTypedData({
        account: signers[i].account!,
        domain: {
          name: 'Simple MultiSig',
          version: '1',
          chainId: BigInt(1),
          verifyingContract: multisigAddr,
          salt: '0x251543af6a222378665a76fe38dbceae4871a070b7fdaf5c6c30cf758dc33cc0'
        },
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
            { name: 'salt', type: 'bytes32' }
          ],
          MultiSigTransaction: [
            { name: 'destination', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'data', type: 'bytes' },
            { name: 'nonce', type: 'uint256' },
            { name: 'executor', type: 'address' },
            { name: 'gasLimit', type: 'uint256' }
          ],
        },
        primaryType: 'MultiSigTransaction',
        message: {
          destination,
          value,
          data,
          nonce,
          executor,
          gasLimit,
        },
      })

      const sig = hexToSignature(signature)
      sigV.push(Number(sig.v))
      sigR.push(sig.r)
      sigS.push(sig.s)
    }

    return { sigV: sigV, sigR: sigR, sigS: sigS }
  }

  describe('Deployment', function () {
    it('Should set the right owners', async () => {
      const { contract, owner } = await loadFixture(deployFixture)

      expect(await contract.read.threshold()).to.equal(threshold)
      expect(await contract.read.ownersArr([BigInt(0)])).to.equal(getAddress(owners[0]))
      expect(await contract.read.ownersArr([BigInt(1)])).to.equal(getAddress(owners[1]))
      expect(await contract.read.ownersArr([BigInt(2)])).to.equal(getAddress(owners[2]))
    })
  })

  describe('Functionality', function () {
    it('Should send value', async () => {
      const { contract, testRegistry, owner, secondAccount, thirdAccount, publicClient } = await loadFixture(deployFixture)

      const executor = owner.account.address
      const destination = sha3(Math.random().toString()).slice(0,42) as `0x${string}`
      const nonce = await contract.read.nonce()
      const signers = [secondAccount, thirdAccount].sort(accSort)
      const value = parseEther('0.01')
      const gasLimit = BigInt(100000)
      const data = toHex('')

      const sigs = await createSigs(
        signers,
        contract.address,
        nonce,
        destination,
        value,
        data,
        executor,
        gasLimit
      )

      await contract.write.execute([
        sigs.sigV,
        sigs.sigR,
        sigs.sigS,
        destination,
        value,
        data,
        executor,
        gasLimit
      ])

      const balance = await publicClient.getBalance({
        address: destination,
      })

      expect(balance).to.eq(value)
    })

    it('Should execute contracts', async () => {
      const { contract, testRegistry, owner, secondAccount, thirdAccount, publicClient } = await loadFixture(deployFixture)

      const number = BigInt(33)
      const executor = owner.account.address
      const destination = testRegistry.address
      const nonce = await contract.read.nonce()
      const signers = [secondAccount, thirdAccount].sort(accSort)
      const value = parseEther('0.01')
      const gasLimit = BigInt(10000000)
      const data = encodeFunctionData({
        abi: testRegistry.abi,
        functionName: 'register',
        args: [number],
      })

      const sigs = await createSigs(
        signers,
        contract.address,
        nonce,
        destination,
        value,
        data,
        executor,
        gasLimit
      )

      await contract.write.execute([
        sigs.sigV,
        sigs.sigR,
        sigs.sigS,
        destination,
        value,
        data,
        executor,
        gasLimit
      ])

      expect(await testRegistry.read.registry([contract.address])).to.eq(number)
    })
  })
})
