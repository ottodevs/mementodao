// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        tsconfigPath: './tsconfig.build.json',
    },
    experimental: {
        appDir: true,
    },
}

export default nextConfig
