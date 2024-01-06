/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL || 'http://localhost:3000'
    }
};