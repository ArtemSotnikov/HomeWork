
interface PostProps {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default function Post( {userId, id, title, body}: PostProps) {
    return (
        <>
            <div>User ID: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>
        </>
    )
}