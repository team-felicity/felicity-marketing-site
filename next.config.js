/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,

  images: {
    domains: ['localhost', '127.0.0.1', 'storage.googleapis.com'],
  },
})
