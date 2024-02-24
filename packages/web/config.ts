const config = {
  environment: process.env.NEXT_PUBLIC_ENV ?? process.env.NODE_ENV ?? 'development',
  gqlUrl: <string>process.env.NEXT_PUBLIC_GQL_URL,
  gqlWsUrl: <string>process.env.NEXT_PUBLIC_GQL_WS_URL,
  walletConnectProjectId: <string>process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
}

export default config
