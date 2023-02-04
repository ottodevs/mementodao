'use client'

import './globals.css'
import { Navigation } from '@/components/Navigation'
import { font } from './font'
import { WagmiProvider } from '@/components/WagmiContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head />
            <body className={font.variable}>
                <WagmiProvider>
                    <Navigation />
                    {children}
                </WagmiProvider>
            </body>
        </html>
    )
}
