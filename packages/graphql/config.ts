const config = {
  environment: process.env.NODE_ENV || 'development',
  appSecret: <string>process.env.APP_SECRET,

  ...(process.env.NODE_ENV && process.env.NODE_ENV === 'development'
    ? {
        dev: {
          db: {
            averageLatencyMsecs: 1_000,
            slowQueryThreshold: 250,
            failPercent: 0,
          },
        },
      }
    : {}),
}

export default config
