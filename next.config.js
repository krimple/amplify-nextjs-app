/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_AWS_PROFILE: process.env.NEXT_PUBLIC_AWS_PROFILE,
    NEXT_PUBLIC_AWS_COGNITO_USER_POOLID: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOLID,
    NEXT_PUBLIC_AWS_COGNITO_WEB_CLIENT_ID: process.env.NEXT_PUBLIC_AWS_COGNITO_WEB_CLIENT_ID
  }
}

module.exports = nextConfig
