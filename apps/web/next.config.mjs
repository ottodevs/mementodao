// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['avatars.dicebear.com'],
    },
    experimental: {
        appDir: true,
    },
}

export default nextConfig
