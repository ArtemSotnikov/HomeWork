interface CommentProps {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

function Comment({postId, id, name, email, body}: CommentProps) {
    return (
        <>
            <div>Post ID: {postId}</div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <hr/>
        </>
    );
}

export default Comment;