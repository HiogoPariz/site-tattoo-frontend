/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  esModules: true,
  reactStrictMode: true,
  future: { webpack5: true }
})
