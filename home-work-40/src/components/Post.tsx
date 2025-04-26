
interface PostProps {
    idUser: number,
    id: number,
    title: string,
    body: string,
}

export default function Post( {idUser, id, title, body}: PostProps) {
    return (
        <>
            <div>User ID: {idUser}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>
        </>
    )
}