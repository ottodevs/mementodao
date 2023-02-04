'use client'

import { getDefaultClient } from 'connectkit'
import { Client, createClient } from 'wagmi'

export const client: Client = createClient(
    getDefaultClient({
        autoConnect: true,
        appName: 'My wagmi + ConnectKit App',
    }),
)
