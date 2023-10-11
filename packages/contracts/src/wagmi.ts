import {
  getContract,
  GetContractArgs,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractMode,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
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
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
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
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
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
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
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
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
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
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
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
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

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
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function getCounter(
  config: Omit<GetContractArgs, 'abi' | 'address'> & {
    chainId?: keyof typeof counterAddress
  },
) {
  return getContract({
    abi: counterABI,
    address: counterAddress[config.chainId as keyof typeof counterAddress],
    ...config,
  })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function readCounter<
  TAbi extends readonly unknown[] = typeof counterABI,
  TFunctionName extends string = string,
>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof counterAddress
  },
) {
  return readContract({
    abi: counterABI,
    address: counterAddress[config.chainId as keyof typeof counterAddress],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function writeCounter<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof counterAddress,
>(
  config:
    | (Omit<
        WriteContractPreparedArgs<typeof counterABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared'
          ? TChainId
          : keyof typeof counterAddress
      })
    | (Omit<
        WriteContractUnpreparedArgs<typeof counterABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared'
          ? TChainId
          : keyof typeof counterAddress
      }),
) {
  return writeContract({
    abi: counterABI,
    address: counterAddress[config.chainId as keyof typeof counterAddress],
    ...config,
  } as unknown as WriteContractArgs<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link counterABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab)
 * -
 */
export function prepareWriteCounter<
  TAbi extends readonly unknown[] = typeof counterABI,
  TFunctionName extends string = string,
>(
  config: Omit<
    PrepareWriteContractConfig<TAbi, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof counterAddress },
) {
  return prepareWriteContract({
    abi: counterABI,
    address: counterAddress[config.chainId as keyof typeof counterAddress],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function getErc20(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc20ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function readErc20<
  TAbi extends readonly unknown[] = typeof erc20ABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({
    abi: erc20ABI,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function writeErc20<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof erc20ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof erc20ABI, TFunctionName>, 'abi'>,
) {
  return writeContract({
    abi: erc20ABI,
    ...config,
  } as unknown as WriteContractArgs<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc20ABI}__.
 */
export function prepareWriteErc20<
  TAbi extends readonly unknown[] = typeof erc20ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: erc20ABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function getErc721(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function readErc721<
  TAbi extends readonly unknown[] = typeof erc721ABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({
    abi: erc721ABI,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function writeErc721<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof erc721ABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof erc721ABI, TFunctionName>, 'abi'>,
) {
  return writeContract({
    abi: erc721ABI,
    ...config,
  } as unknown as WriteContractArgs<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function prepareWriteErc721<
  TAbi extends readonly unknown[] = typeof erc721ABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: erc721ABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function getFaucet(
  config: Omit<GetContractArgs, 'abi' | 'address'> & {
    chainId?: keyof typeof faucetAddress
  },
) {
  return getContract({
    abi: faucetABI,
    address: faucetAddress[config.chainId as keyof typeof faucetAddress],
    ...config,
  })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function readFaucet<
  TAbi extends readonly unknown[] = typeof faucetABI,
  TFunctionName extends string = string,
>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof faucetAddress
  },
) {
  return readContract({
    abi: faucetABI,
    address: faucetAddress[config.chainId as keyof typeof faucetAddress],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function writeFaucet<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof faucetAddress,
>(
  config:
    | (Omit<
        WriteContractPreparedArgs<typeof faucetABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared'
          ? TChainId
          : keyof typeof faucetAddress
      })
    | (Omit<
        WriteContractUnpreparedArgs<typeof faucetABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared'
          ? TChainId
          : keyof typeof faucetAddress
      }),
) {
  return writeContract({
    abi: faucetABI,
    address: faucetAddress[config.chainId as keyof typeof faucetAddress],
    ...config,
  } as unknown as WriteContractArgs<typeof faucetABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link faucetABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x5b1869D9A4C187F2EAa108f3062412ecf0526b24)
 * -
 */
export function prepareWriteFaucet<
  TAbi extends readonly unknown[] = typeof faucetABI,
  TFunctionName extends string = string,
>(
  config: Omit<
    PrepareWriteContractConfig<TAbi, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof faucetAddress },
) {
  return prepareWriteContract({
    abi: faucetABI,
    address: faucetAddress[config.chainId as keyof typeof faucetAddress],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link mortalABI}__.
 */
export function getMortal(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: mortalABI, ...config })
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mortalABI}__.
 */
export function writeMortal<TFunctionName extends string>(
  config:
    | Omit<WriteContractPreparedArgs<typeof mortalABI, TFunctionName>, 'abi'>
    | Omit<WriteContractUnpreparedArgs<typeof mortalABI, TFunctionName>, 'abi'>,
) {
  return writeContract({
    abi: mortalABI,
    ...config,
  } as unknown as WriteContractArgs<typeof mortalABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link mortalABI}__.
 */
export function prepareWriteMortal<
  TAbi extends readonly unknown[] = typeof mortalABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: mortalABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ownedABI}__.
 */
export function getOwned(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: ownedABI, ...config })
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function getSubscription(
  config: Omit<GetContractArgs, 'abi' | 'address'> & {
    chainId?: keyof typeof subscriptionAddress
  },
) {
  return getContract({
    abi: subscriptionABI,
    address:
      subscriptionAddress[config.chainId as keyof typeof subscriptionAddress],
    ...config,
  })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function readSubscription<
  TAbi extends readonly unknown[] = typeof subscriptionABI,
  TFunctionName extends string = string,
>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof subscriptionAddress
  },
) {
  return readContract({
    abi: subscriptionABI,
    address:
      subscriptionAddress[config.chainId as keyof typeof subscriptionAddress],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function writeSubscription<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof subscriptionAddress,
>(
  config:
    | (Omit<
        WriteContractPreparedArgs<typeof subscriptionABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared'
          ? TChainId
          : keyof typeof subscriptionAddress
      })
    | (Omit<
        WriteContractUnpreparedArgs<typeof subscriptionABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared'
          ? TChainId
          : keyof typeof subscriptionAddress
      }),
) {
  return writeContract({
    abi: subscriptionABI,
    address:
      subscriptionAddress[config.chainId as keyof typeof subscriptionAddress],
    ...config,
  } as unknown as WriteContractArgs<typeof subscriptionABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link subscriptionABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xCfEB869F69431e42cdB54A4F4f105C19C080A601)
 * -
 */
export function prepareWriteSubscription<
  TAbi extends readonly unknown[] = typeof subscriptionABI,
  TFunctionName extends string = string,
>(
  config: Omit<
    PrepareWriteContractConfig<TAbi, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof subscriptionAddress },
) {
  return prepareWriteContract({
    abi: subscriptionABI,
    address:
      subscriptionAddress[config.chainId as keyof typeof subscriptionAddress],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function getWNat(
  config: Omit<GetContractArgs, 'abi' | 'address'> & {
    chainId?: keyof typeof wNatAddress
  },
) {
  return getContract({
    abi: wNatABI,
    address: wNatAddress[config.chainId as keyof typeof wNatAddress],
    ...config,
  })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function readWNat<
  TAbi extends readonly unknown[] = typeof wNatABI,
  TFunctionName extends string = string,
>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof wNatAddress
  },
) {
  return readContract({
    abi: wNatABI,
    address: wNatAddress[config.chainId as keyof typeof wNatAddress],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function writeWNat<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof wNatAddress,
>(
  config:
    | (Omit<
        WriteContractPreparedArgs<typeof wNatABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof wNatAddress
      })
    | (Omit<
        WriteContractUnpreparedArgs<typeof wNatABI, TFunctionName>,
        'abi' | 'address'
      > & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof wNatAddress
      }),
) {
  return writeContract({
    abi: wNatABI,
    address: wNatAddress[config.chainId as keyof typeof wNatAddress],
    ...config,
  } as unknown as WriteContractArgs<typeof wNatABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link wNatABI}__.
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B)
 * -
 */
export function prepareWriteWNat<
  TAbi extends readonly unknown[] = typeof wNatABI,
  TFunctionName extends string = string,
>(
  config: Omit<
    PrepareWriteContractConfig<TAbi, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wNatAddress },
) {
  return prepareWriteContract({
    abi: wNatABI,
    address: wNatAddress[config.chainId as keyof typeof wNatAddress],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}
