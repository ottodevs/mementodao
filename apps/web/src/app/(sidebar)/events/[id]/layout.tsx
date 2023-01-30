import Link from 'next/link'

interface EventProps {
    id: number
}

const fetchSingleEvent = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    })
    return await res.json()
}

export default async function Event({ children, params }: { children: React.ReactNode; params: EventProps }) {
    const { id } = params
    const event = await fetchSingleEvent(id)

    return (
        <article>
            <h1>{event.title}</h1>
            <p>{event.body}</p>
            <Link href={`/events/${id}/comments`}>View comments</Link>
            {children}
        </article>
    )
}
