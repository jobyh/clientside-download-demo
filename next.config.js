/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  basePath:
    process.env.NODE_ENV === 'production' ? '/clientside-download-demo' : '',
}

module.exports = nextConfig
