'use client'

import { client } from '@/lib/wagmi'
import { ConnectKitProvider } from 'connectkit'
import { useEffect, useState } from 'react'
import { WagmiConfig } from 'wagmi'

export function WagmiProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <WagmiConfig client={client}>
            {children}
            {/* <ConnectKitProvider>{mounted && children}</ConnectKitProvider> */}
        </WagmiConfig>
    )
}
