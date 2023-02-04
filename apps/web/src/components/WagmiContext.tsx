'use client'

import { ConnectKitProvider } from 'connectkit'
import { useEffect, useState } from 'react'
import { WagmiConfig } from 'wagmi'

import { getDefaultClient } from 'connectkit'
import { Client, createClient } from 'wagmi'

export const client: Client = createClient(
    getDefaultClient({
        autoConnect: true,
        appName: 'My wagmi + ConnectKit App',
    }),
)

export function WagmiProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <WagmiConfig client={client}>
            <ConnectKitProvider>{mounted && children}</ConnectKitProvider>
        </WagmiConfig>
    )
}
