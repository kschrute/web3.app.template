/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, net: false, tls: false }
  //   return config
  // },
  webpack(config /* , options */) {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    config.module.rules.push({
      test: /schema.graphql$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'raw-loader',
          options: {
            esModule: false,
          },
        },
      ],
    })

    config.module.rules.push({
      // test: /\.(graphql|gql)$/,
      test: /\/src\/graphql\/\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
}
