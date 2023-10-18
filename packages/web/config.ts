const config = {
  environment: process.env.NEXT_PUBLIC_ENV ?? process.env.NODE_ENV ?? 'development',
  gqlUrl: process.env.NEXT_PUBLIC_GQL_URL as string,
  gqlWsUrl: process.env.NEXT_PUBLIC_GQL_WS_URL as string,
}

export default config
