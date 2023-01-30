// import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

import { Sidebar } from '@/components/Sidebar'

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative sm:-8 py-4 px-6 min-h-[calc(100vh-64px)] flex flex-row'>
            <div className='sm:flex hidden mr-10 relative'>
                <Sidebar />
            </div>

            <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>{children}</div>
        </div>
    )
}
