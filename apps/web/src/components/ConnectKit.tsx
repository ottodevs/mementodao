'use client'

import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import { Account } from './Account'

export default function ConnectKit() {
    const { isConnected } = useAccount()

    return (
        <>
            <ConnectKitButton />
            {isConnected && <Account />}
        </>
    )
}
