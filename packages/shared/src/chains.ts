import { Chain, localhost as localhostDefault } from 'viem/chains'

export const localhost = {
  ...localhostDefault,
  name: 'Localhost',
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8546'] },
    public: { http: ['http://127.0.0.1:8546'] },
  },
} as const satisfies Chain
