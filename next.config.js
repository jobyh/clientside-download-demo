/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath: '/clientside-download-demo',
}

module.exports = nextConfig
