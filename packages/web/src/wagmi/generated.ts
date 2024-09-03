import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterAbi = [
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
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterAddress = {
  1: '0x0000000000000000000000000000000000000000',
  1337: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
  31337: '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab',
  11155111: '0x0000000000000000000000000000000000000000',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const faucetAbi = [
  { stateMutability: 'payable', type: 'receive' },
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
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const faucetAddress = {
  1: '0x0000000000000000000000000000000000000000',
  1337: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
  31337: '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24',
  11155111: '0x0000000000000000000000000000000000000000',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const faucetConfig = { address: faucetAddress, abi: faucetAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mortal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mortalAbi = [
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

export const ownedAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Subscription
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const subscriptionAbi = [
  { stateMutability: 'payable', type: 'constructor', inputs: [] },
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
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const subscriptionAddress = {
  1: '0x0000000000000000000000000000000000000000',
  1337: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
  31337: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
  11155111: '0x0000000000000000000000000000000000000000',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const subscriptionConfig = {
  address: subscriptionAddress,
  abi: subscriptionAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WNat
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const wNatAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { stateMutability: 'payable', type: 'receive' },
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
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const wNatAddress = {
  1: '0x0000000000000000000000000000000000000000',
  1337: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
  31337: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
  11155111: '0x0000000000000000000000000000000000000000',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const wNatConfig = { address: wNatAddress, abi: wNatAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadCounter = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadCounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'number',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteCounter = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteCounterIncrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'increment',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteCounterSetNumber = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'setNumber',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateCounter = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateCounterIncrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    address: counterAddress,
    functionName: 'increment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateCounterSetNumber =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    address: counterAddress,
    functionName: 'setNumber',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link counterAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchCounterEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link counterAbi}__ and `eventName` set to `"Updated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchCounterUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: counterAbi,
    address: counterAddress,
    eventName: 'Updated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadFaucet = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"AMOUNT"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadFaucetAmount = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'AMOUNT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"accountClaimed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadFaucetAccountClaimed = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'accountClaimed',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteFaucet = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteFaucetClaim = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"destroy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteFaucetDestroy = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'destroy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateFaucet = /*#__PURE__*/ createUseSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claim"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateFaucetClaim = /*#__PURE__*/ createUseSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claim',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"destroy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateFaucetDestroy = /*#__PURE__*/ createUseSimulateContract(
  { abi: faucetAbi, address: faucetAddress, functionName: 'destroy' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchFaucetEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetAbi}__ and `eventName` set to `"Deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchFaucetDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetAbi,
    address: faucetAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetAbi}__ and `eventName` set to `"Withdrawal"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchFaucetWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetAbi,
    address: faucetAddress,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mortalAbi}__
 */
export const useWriteMortal = /*#__PURE__*/ createUseWriteContract({
  abi: mortalAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mortalAbi}__ and `functionName` set to `"destroy"`
 */
export const useWriteMortalDestroy = /*#__PURE__*/ createUseWriteContract({
  abi: mortalAbi,
  functionName: 'destroy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mortalAbi}__
 */
export const useSimulateMortal = /*#__PURE__*/ createUseSimulateContract({
  abi: mortalAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mortalAbi}__ and `functionName` set to `"destroy"`
 */
export const useSimulateMortalDestroy = /*#__PURE__*/ createUseSimulateContract(
  { abi: mortalAbi, functionName: 'destroy' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadSubscription = /*#__PURE__*/ createUseReadContract({
  abi: subscriptionAbi,
  address: subscriptionAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadSubscriptionOwner = /*#__PURE__*/ createUseReadContract({
  abi: subscriptionAbi,
  address: subscriptionAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link subscriptionAbi}__ and `functionName` set to `"userSubscribedAt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadSubscriptionUserSubscribedAt =
  /*#__PURE__*/ createUseReadContract({
    abi: subscriptionAbi,
    address: subscriptionAddress,
    functionName: 'userSubscribedAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteSubscription = /*#__PURE__*/ createUseWriteContract({
  abi: subscriptionAbi,
  address: subscriptionAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link subscriptionAbi}__ and `functionName` set to `"subscribe"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteSubscriptionSubscribe =
  /*#__PURE__*/ createUseWriteContract({
    abi: subscriptionAbi,
    address: subscriptionAddress,
    functionName: 'subscribe',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateSubscription = /*#__PURE__*/ createUseSimulateContract({
  abi: subscriptionAbi,
  address: subscriptionAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link subscriptionAbi}__ and `functionName` set to `"subscribe"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateSubscriptionSubscribe =
  /*#__PURE__*/ createUseSimulateContract({
    abi: subscriptionAbi,
    address: subscriptionAddress,
    functionName: 'subscribe',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchSubscriptionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionAbi,
    address: subscriptionAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link subscriptionAbi}__ and `eventName` set to `"Subscribed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchSubscriptionSubscribedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: subscriptionAbi,
    address: subscriptionAddress,
    eventName: 'Subscribed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNat = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatDomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatAllowance = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatDecimals = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatName = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatNonces = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatSymbol = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useReadWNatTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNat = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatApprove = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatBurn = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"burnFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"depositTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatDepositTo = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'depositTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatPermit = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdrawFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWriteWNatWithdrawFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'withdrawFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNat = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"burnFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatBurnFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"depositTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatDepositTo = /*#__PURE__*/ createUseSimulateContract(
  { abi: wNatAbi, address: wNatAddress, functionName: 'depositTo' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatPermit = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdrawFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useSimulateWNatWithdrawFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'withdrawFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchWNatEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchWNatApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchWNatDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchWNatEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchWNatTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Withdrawal"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0000000000000000000000000000000000000000)
 * -
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const useWatchWNatWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
