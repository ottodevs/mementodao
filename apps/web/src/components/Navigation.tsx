import Link from 'next/link'
import { ConnectKitButton } from 'connectkit'
import Image from 'next/image'

const links = [
    { label: 'Events', route: '/events' },
    { label: 'Issuer', route: '/issuer' },
    { label: 'Collector', route: '/collector' },
    { label: 'DAO', route: '/dao' },
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
                        <li className='navbar-item text-sm antialiased' key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className='navbar-end'>
                    <ConnectKitButton />
                </div>
            </nav>
        </header>
    )
}
