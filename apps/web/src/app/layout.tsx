'use client'

import './globals.css'
import { Navigation } from '@/components/Navigation'
import { font } from './font'
import { WagmiProvider } from '@/components/WagmiContext'
import { ConnectKitProvider } from 'connectkit'
// import { WagmiConfig } from 'wagmi'
// import { WagmiConfig, createClient } from 'wagmi'
import { goerli } from 'wagmi/chains'
// import { ConnectKitProvider, getDefaultClient } from 'connectkit'

// const wagmiClient = createClient(
//     getDefaultClient({
//         appName: 'Your App Name',
//         //   alchemyId,
//         //   chains,
//     }),
// )

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head />
            <body className={font.variable}>
                {/* <WagmiConfig client={wagmiClient}>
                    <ConnectKitProvider>
                        <div className=''>{children}</div>
                    </ConnectKitProvider>
                </WagmiConfig> */}
                <WagmiProvider>
                    <ConnectKitProvider>
                        <Navigation />
                        {children}
                    </ConnectKitProvider>
                </WagmiProvider>
            </body>
        </html>
    )
}
