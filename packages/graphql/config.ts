const config = {
  environment: process.env.NODE_ENV || 'development',
  appSecret: process.env.APP_SECRET as string,
}

export default config
