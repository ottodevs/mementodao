// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Dao() {
    return (
        <main>
            <h1>DAO</h1>
            <ul>
                <li>
                    <h4>If logged user is a member:</h4>
                    <ul>
                        <li>See my dashboard</li>
                        <li>View proposals</li>
                        <li>Notifications</li>
                    </ul>
                </li>
                <li>Join the Memento DAO</li>
            </ul>
        </main>
    )
}
