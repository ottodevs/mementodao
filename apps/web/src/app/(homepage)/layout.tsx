'use client'

import '@/style/globals.css'
import { font } from '@/style/font'
import { Footer } from '@/components/Footer'
import { Web3Provider } from '@/components/Web3Provider'
import { Navigation } from '@/components/Navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`h-screen ${font.variable}`}>
                <Web3Provider>
                    <div className='flex flex-col justify-between h-screen'>
                        <div className='grow'>
                            <Navigation />
                            {/* <main className='mt-16 pt-2.5 pb-2.5 pl-12 pr-12'> */}
                            <main className='mt-16'>{children}</main>
                        </div>
                        <Footer />
                    </div>
                </Web3Provider>
            </body>
        </html>
    )
}
