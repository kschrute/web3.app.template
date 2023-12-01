import hre from 'hardhat'
import { hexToSignature, keccak256, toHex } from 'viem'
import { expect } from 'chai'

describe('Verifier', () => {
  async function deployFixture() {
    const [owner, admin] = await hre.viem.getWalletClients()

    const contract = await hre.viem.deployContract(
      'Verifier',
      []
    )

    const publicClient = await hre.viem.getPublicClient()

    return {
      contract,
      owner,
      admin,
      publicClient,
    }
  }

  it('Should work with messages', async () => {
    const { contract, owner } = await deployFixture()

    const message = 'hello'
    const raw = keccak256(toHex(message))

    // const signature = await owner.signMessage({ message })
    const signature = await owner.signMessage({ message: { raw } })

    expect(await contract.read.verifyMessage([message, signature])).to.be.true
    expect(await contract.read.verifyMessageRaw([raw, signature])).to.be.true
  })

  it('Should work with typed data', async () => {
    const { contract, owner } = await deployFixture()

    const signature = await owner.signTypedData({
      domain: {
        name: 'My amazing dApp',
        version: '1',
        chainId: BigInt(0),
        // verifyingContract: '0x1C56346CD2A2Bf3202F771f50d3D14a367B48070',
        verifyingContract: contract.address,
        salt: '0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558'
      },
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
          { name: 'salt', type: 'bytes32' },
        ],
        Bid: [
          { name: 'amount', type: 'uint256' },
          { name: 'bidder', type: 'Identity' },
        ],
        Identity: [
          { name: 'userId', type: 'uint256' },
          { name: 'wallet', type: 'address' },
        ],
      },
      primaryType: 'Bid',
      message: {
        amount: BigInt(100),
        bidder: {
          userId: BigInt(323),
          wallet: '0x3333333333333333333333333333333333333333',
        },
      },
    })

    const sig = hexToSignature(signature)

    expect(await contract.read.verify([Number(sig.v), sig.r, sig.s])).to.be.true
  })

})
