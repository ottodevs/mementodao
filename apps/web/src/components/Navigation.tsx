import Link from 'next/link'
// import { ConnectKitButton } from 'connectkit'
import Image from 'next/image'

// Hopefully linked to different sections of the home SPA
const links = [
    { label: 'Events', route: '#events' },
    { label: 'Issuers', route: '#issuers' },
    { label: 'Collectors', route: '#collectors' },
    { label: 'DAO', route: '#dao' },
    { label: 'Curation', route: '#curation' },
]

export function Navigation() {
    return (
        <header>
            <nav className='navbar navbar-sticky navbar-no-boxShadow h-16 px-12 bg-white'>
                <div className='navbar-start'>
                    <Link
                        className='navbar-item inline-flex items-center dark:text-white text-black text-2xl md:text-2xl font-bold gap-2.5 -ml-3'
                        href='/'>
                        <Image alt='logo' width='30' height='30' src='/zoomed-logo.svg' priority />
                        MementoDAO
                    </Link>
                </div>
                <ul className='navbar-center'>
                    {links.map(({ label, route }) => (
                        <li className='navbar-item text-sm antialiased min-w-fit' key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='navbar-end'>{/* <ConnectKitButton /> */}</div>
            </nav>
        </header>
    )
}
