import Image from 'next/image'

interface EventProps {
    params: {
        id: number
    }
}

interface CommentProps {
    id: number
    name: string
    body: string
    email: string
}

const fetchComments = async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    // throw new Error('Error loading comments')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60,
        },
    }).then(res => res.json())
}

export default async function Comments({ params }: EventProps) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul style={{ padding: '16px 40px', background: '#222' }}>
            {comments.map((comment: CommentProps) => (
                <li key={comment.id}>
                    <Image
                        width={50}
                        height={50}
                        src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
                        alt={comment.name}
                    />
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}
