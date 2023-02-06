'use client' // needed for Web3Provider

import Navbar from '@/components/AppNavbar'
import { Sidebar } from '@/components/Sidebar'
import { Web3Provider } from '@/components/Web3Provider'

export default function WebAppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Web3Provider>
            <div className='z-10 relative sm:-8 p-4 bg-gradient-to-br to-[#ef4136bf] from-[#fbb040bf] min-h-screen flex flex-row'>
                <Sidebar />
                <div className='-z-10 flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
                    <Navbar />
                    {children}
                </div>
            </div>
        </Web3Provider>
    )
}
