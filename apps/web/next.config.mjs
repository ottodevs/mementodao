// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // typescript: {
    //     tsconfigPath: './tsconfig.build.json',
    // },
    images: {
        domains: ['avatars.dicebear.com'],
    },
    experimental: {
        appDir: true,
    },
}

export default nextConfig
