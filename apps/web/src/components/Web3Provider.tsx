// 'use client'

// import { useEffect, useState } from 'react'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { Chain, Client, createClient, WagmiConfig } from 'wagmi'
// import { APP_NAME } from '@/lib/consts'
// import { useTheme } from 'next-themes'

const hyperspaceTestnet: Chain = {
    id: 3141,
    name: 'Filecoin HyperSpace Testnet',
    network: 'hyperspace testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Filecoin',
        symbol: 'tFIL',
    },
    rpcUrls: {
        public: { http: ['https://api.hyperspace.node.glif.io/rpc/v1'] },
        default: { http: ['https://api.hyperspace.node.glif.io/rpc/v1'] },
    },
    blockExplorers: {
        default: { name: 'Glif', url: 'https://explorer.glif.io/type/valuex/?network=hyperspacenet' },
    },
    testnet: true,
    contracts: {
        ensRegistry: {
            address: '0x0',
        },
    },
}

import { Types } from 'connectkit'
import Image from 'next/image'

const MyCustomAvatar = ({ address, ensImage, ensName, size, radius }: Types.CustomAvatarProps) => {
    return (
        <div
            style={{
                overflow: 'hidden',
                borderRadius: radius,
                height: size,
                width: size,
            }}>
            <Image
                width={size}
                height={size}
                src={`https://avatars.dicebear.com/api/pixel-art-neutral/${address}.svg`}
                alt={address || 'avatar'}
                priority
            />
        </div>
    )
}

export default MyCustomAvatar

const client: Client = createClient(
    getDefaultClient({
        autoConnect: true,
        appName: 'My wagmi + ConnectKit App',
        chains: [hyperspaceTestnet],

        // appName: APP_NAME,
        // infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    }),
)

export function Web3Provider({ children }: { children: React.ReactNode }) {
    // const { resolvedTheme } = useTheme()
    // const [mounted, setMounted] = useState(false)
    // useEffect(() => setMounted(true), [])

    return (
        <WagmiConfig client={client}>
            <ConnectKitProvider
                options={{
                    customAvatar: MyCustomAvatar,
                }}>
                {/*mounted && */ children}
            </ConnectKitProvider>
            {/* <ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider> */}
        </WagmiConfig>
    )
}
