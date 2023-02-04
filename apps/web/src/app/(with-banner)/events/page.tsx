import { Suspense } from 'react'
import { ListOfEvents } from './ListOfEvents'

export default function Events() {
    return (
        <main>
            <h1>Events</h1>
            <section>
                <Suspense fallback={<p>Loading events...</p>}>
                    {/* @ts-expect-error Server Component */}
                    <ListOfEvents />
                </Suspense>
            </section>
        </main>
    )
}
