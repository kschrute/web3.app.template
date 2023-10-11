import {
  useNetwork,
  useChainId,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Updated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export const counterAddress = {
  1: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
  5: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
  31337: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export const faucetABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'AMOUNT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'accountClaimed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'claim',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'destroy',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export const faucetAddress = {
  1: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
  5: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
  31337: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export const faucetConfig = { address: faucetAddress, abi: faucetABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mortal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mortalABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'destroy',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Owned
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownedABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Subscription
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export const subscriptionABI = [
  { stateMutability: 'payable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'when',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Subscribed',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'subscribe',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userSubscribedAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export const subscriptionAddress = {
  1: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
  5: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
  31337: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export const subscriptionConfig = {
  address: subscriptionAddress,
  abi: subscriptionABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WNat
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export const wNatABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Withdrawal',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_recipient', internalType: 'address', type: 'address' }],
    name: 'depositTo',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawFrom',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export const wNatAddress = {
  1: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
  5: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
  31337: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export const wNatConfig = { address: wNatAddress, abi: wNatABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"number"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterNumber<
  TFunctionName extends 'number',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'number',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterIncrement<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'increment'
        >['request']['abi'],
        'increment',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'increment' }
    : UseContractWriteConfig<typeof counterABI, 'increment', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'increment'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'increment', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'increment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterSetNumber<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof counterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'setNumber'
        >['request']['abi'],
        'setNumber',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setNumber' }
    : UseContractWriteConfig<typeof counterABI, 'setNumber', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setNumber'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof counterABI, 'setNumber', TMode>({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'setNumber',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function usePrepareCounterIncrement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'increment'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'increment',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'increment'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function usePrepareCounterSetNumber(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    functionName: 'setNumber',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof counterABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    ...config,
  } as UseContractEventConfig<typeof counterABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__ and `eventName` set to `"Updated"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function useCounterUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof counterABI, 'Updated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof counterAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: counterABI,
    address: counterAddress[chainId as keyof typeof counterAddress],
    eventName: 'Updated',
    ...config,
  } as UseContractEventConfig<typeof counterABI, 'Updated'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    ...config,
  } as UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"AMOUNT"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetAmount<
  TFunctionName extends 'AMOUNT',
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    functionName: 'AMOUNT',
    ...config,
  } as UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"accountClaimed"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetAccountClaimed<
  TFunctionName extends 'accountClaimed',
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    functionName: 'accountClaimed',
    ...config,
  } as UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof faucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof faucetABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof faucetABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof faucetABI, TFunctionName, TMode>({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"claim"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetClaim<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof faucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof faucetABI, 'claim'>['request']['abi'],
        'claim',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'claim' }
    : UseContractWriteConfig<typeof faucetABI, 'claim', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'claim'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof faucetABI, 'claim', TMode>({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    functionName: 'claim',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"destroy"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetDestroy<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof faucetAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof faucetABI,
          'destroy'
        >['request']['abi'],
        'destroy',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'destroy' }
    : UseContractWriteConfig<typeof faucetABI, 'destroy', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'destroy'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof faucetABI, 'destroy', TMode>({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    functionName: 'destroy',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function usePrepareFaucetWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"claim"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function usePrepareFaucetClaim(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, 'claim'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    functionName: 'claim',
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, 'claim'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"destroy"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function usePrepareFaucetDestroy(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, 'destroy'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    functionName: 'destroy',
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, 'destroy'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof faucetABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    ...config,
  } as UseContractEventConfig<typeof faucetABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link faucetABI}__ and `eventName` set to `"Deposit"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetDepositEvent(
  config: Omit<
    UseContractEventConfig<typeof faucetABI, 'Deposit'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    eventName: 'Deposit',
    ...config,
  } as UseContractEventConfig<typeof faucetABI, 'Deposit'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link faucetABI}__ and `eventName` set to `"Withdrawal"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function useFaucetWithdrawalEvent(
  config: Omit<
    UseContractEventConfig<typeof faucetABI, 'Withdrawal'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof faucetAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: faucetABI,
    address: faucetAddress[chainId as keyof typeof faucetAddress],
    eventName: 'Withdrawal',
    ...config,
  } as UseContractEventConfig<typeof faucetABI, 'Withdrawal'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mortalABI}__.
 */
export function useMortalWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mortalABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof mortalABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof mortalABI, TFunctionName, TMode>({
    abi: mortalABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mortalABI}__ and `functionName` set to `"destroy"`.
 */
export function useMortalDestroy<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mortalABI,
          'destroy'
        >['request']['abi'],
        'destroy',
        TMode
      > & { functionName?: 'destroy' }
    : UseContractWriteConfig<typeof mortalABI, 'destroy', TMode> & {
        abi?: never
        functionName?: 'destroy'
      } = {} as any,
) {
  return useContractWrite<typeof mortalABI, 'destroy', TMode>({
    abi: mortalABI,
    functionName: 'destroy',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mortalABI}__.
 */
export function usePrepareMortalWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mortalABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mortalABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof mortalABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mortalABI}__ and `functionName` set to `"destroy"`.
 */
export function usePrepareMortalDestroy(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mortalABI, 'destroy'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: mortalABI,
    functionName: 'destroy',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mortalABI, 'destroy'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof subscriptionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof subscriptionABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    ...config,
  } as UseContractReadConfig<
    typeof subscriptionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link subscriptionABI}__ and `functionName` set to `"owner"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof subscriptionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof subscriptionABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof subscriptionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link subscriptionABI}__ and `functionName` set to `"userSubscribedAt"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionUserSubscribedAt<
  TFunctionName extends 'userSubscribedAt',
  TSelectData = ReadContractResult<typeof subscriptionABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof subscriptionABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    functionName: 'userSubscribedAt',
    ...config,
  } as UseContractReadConfig<
    typeof subscriptionABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof subscriptionAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof subscriptionABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof subscriptionABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof subscriptionABI, TFunctionName, TMode>({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link subscriptionABI}__ and `functionName` set to `"subscribe"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionSubscribe<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof subscriptionAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof subscriptionABI,
          'subscribe'
        >['request']['abi'],
        'subscribe',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'subscribe' }
    : UseContractWriteConfig<typeof subscriptionABI, 'subscribe', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'subscribe'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof subscriptionABI, 'subscribe', TMode>({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    functionName: 'subscribe',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function usePrepareSubscriptionWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof subscriptionABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof subscriptionABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link subscriptionABI}__ and `functionName` set to `"subscribe"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function usePrepareSubscriptionSubscribe(
  config: Omit<
    UsePrepareContractWriteConfig<typeof subscriptionABI, 'subscribe'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    functionName: 'subscribe',
    ...config,
  } as UsePrepareContractWriteConfig<typeof subscriptionABI, 'subscribe'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof subscriptionABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    ...config,
  } as UseContractEventConfig<typeof subscriptionABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link subscriptionABI}__ and `eventName` set to `"Subscribed"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function useSubscriptionSubscribedEvent(
  config: Omit<
    UseContractEventConfig<typeof subscriptionABI, 'Subscribed'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof subscriptionAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: subscriptionABI,
    address: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
    eventName: 'Subscribed',
    ...config,
  } as UseContractEventConfig<typeof subscriptionABI, 'Subscribed'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatDomainSeparator<
  TFunctionName extends 'DOMAIN_SEPARATOR',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'DOMAIN_SEPARATOR',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"allowance"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"decimals"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"eip712Domain"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatEip712Domain<
  TFunctionName extends 'eip712Domain',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'eip712Domain',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"name"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"nonces"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatNonces<
  TFunctionName extends 'nonces',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'nonces',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"symbol"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"totalSupply"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof wNatABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof wNatABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof wNatABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof wNatABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, TFunctionName, TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatApprove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof wNatABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof wNatABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'approve', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"burn"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatBurn<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof wNatABI, 'burn'>['request']['abi'],
        'burn',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'burn' }
    : UseContractWriteConfig<typeof wNatABI, 'burn', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'burn'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'burn', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'burn',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"burnFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatBurnFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wNatABI,
          'burnFrom'
        >['request']['abi'],
        'burnFrom',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'burnFrom' }
    : UseContractWriteConfig<typeof wNatABI, 'burnFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'burnFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'burnFrom', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'burnFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"deposit"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatDeposit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof wNatABI, 'deposit'>['request']['abi'],
        'deposit',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'deposit' }
    : UseContractWriteConfig<typeof wNatABI, 'deposit', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'deposit'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'deposit', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'deposit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"depositTo"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatDepositTo<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wNatABI,
          'depositTo'
        >['request']['abi'],
        'depositTo',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'depositTo' }
    : UseContractWriteConfig<typeof wNatABI, 'depositTo', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'depositTo'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'depositTo', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'depositTo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"permit"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatPermit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof wNatABI, 'permit'>['request']['abi'],
        'permit',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'permit' }
    : UseContractWriteConfig<typeof wNatABI, 'permit', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'permit'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'permit', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'permit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatTransfer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wNatABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'transfer' }
    : UseContractWriteConfig<typeof wNatABI, 'transfer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transfer'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'transfer', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wNatABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<typeof wNatABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'transferFrom', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"withdraw"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatWithdraw<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wNatABI,
          'withdraw'
        >['request']['abi'],
        'withdraw',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof wNatABI, 'withdraw', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'withdraw'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'withdraw', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"withdrawFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatWithdrawFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wNatABI,
          'withdrawFrom'
        >['request']['abi'],
        'withdrawFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'withdrawFrom'
      }
    : UseContractWriteConfig<typeof wNatABI, 'withdrawFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'withdrawFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof wNatABI, 'withdrawFrom', TMode>({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'withdrawFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"approve"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"burn"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatBurn(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'burn'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'burn',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'burn'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"burnFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatBurnFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'burnFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'burnFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'burnFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"deposit"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatDeposit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'deposit'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'deposit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'deposit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"depositTo"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatDepositTo(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'depositTo'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'depositTo',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'depositTo'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"permit"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatPermit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'permit'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'permit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'permit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'transfer'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"transferFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"withdraw"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatWithdraw(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'withdraw'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'withdraw'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wNatABI}__ and `functionName` set to `"withdrawFrom"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function usePrepareWNatWithdrawFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wNatABI, 'withdrawFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    functionName: 'withdrawFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wNatABI, 'withdrawFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof wNatABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    ...config,
  } as UseContractEventConfig<typeof wNatABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wNatABI}__ and `eventName` set to `"Approval"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof wNatABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof wNatABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wNatABI}__ and `eventName` set to `"Deposit"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatDepositEvent(
  config: Omit<
    UseContractEventConfig<typeof wNatABI, 'Deposit'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    eventName: 'Deposit',
    ...config,
  } as UseContractEventConfig<typeof wNatABI, 'Deposit'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wNatABI}__ and `eventName` set to `"EIP712DomainChanged"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatEip712DomainChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof wNatABI, 'EIP712DomainChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    eventName: 'EIP712DomainChanged',
    ...config,
  } as UseContractEventConfig<typeof wNatABI, 'EIP712DomainChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wNatABI}__ and `eventName` set to `"Transfer"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof wNatABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof wNatABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link wNatABI}__ and `eventName` set to `"Withdrawal"`.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function useWNatWithdrawalEvent(
  config: Omit<
    UseContractEventConfig<typeof wNatABI, 'Withdrawal'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof wNatAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: wNatABI,
    address: wNatAddress[chainId as keyof typeof wNatAddress],
    eventName: 'Withdrawal',
    ...config,
  } as UseContractEventConfig<typeof wNatABI, 'Withdrawal'>)
}
