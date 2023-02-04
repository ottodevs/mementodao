import Link from 'next/link'
import { LikeButton } from './LikeButton'

interface Event {
    id: number
    title: string
    body: string
}

const fetchEvents = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        },
    })
    return await res.json()
}

export async function ListOfEvents() {
    const events = await fetchEvents()

    return events.slice(0, 5).map((event: Event) => (
        <article key={event.id}>
            <Link href={`/events/${event.id}`}>
                <h2 style={{ color: '#09f' }}>{event.title}</h2>
                <p>{event.body}</p>
                <LikeButton id={event.id} />
            </Link>
        </article>
    ))
}
