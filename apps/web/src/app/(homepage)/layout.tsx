import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/HomeNavbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navigation />
            <main className='mt-16 py-2.5 px-12'>{children}</main>
            <Footer />
        </div>
    )
}
