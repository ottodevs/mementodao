import Link from 'next/link'
import { ConnectKitButton } from 'connectkit'
import styles from './Navigation.module.css'

const links = [
    { label: 'Home', route: '/' },
    { label: 'Events', route: '/events' },
    { label: 'Issuer', route: '/issuer' },
    { label: 'Collector', route: '/collector' },
    { label: 'DAO', route: '/dao' },
]

export function Navigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                    <ConnectKitButton />
                </ul>
            </nav>
        </header>
    )
}
