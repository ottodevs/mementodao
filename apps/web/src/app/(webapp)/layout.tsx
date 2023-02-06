'use client' // needed for Web3Provider

import { Web3Provider } from '@/components/Web3Provider'

// import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

// import { Sidebar } from '@/components/Sidebar'

// export default function EventsLayout({ children }: { children: React.ReactNode }) {
//     return (
//                 <Sidebar />

//     )
// }

export default function WebAppLayout({ children }: { children: React.ReactNode }) {
    return (
        <Web3Provider>
            <h1>WebAppLayout</h1>
            {children}
        </Web3Provider>
    )
}
