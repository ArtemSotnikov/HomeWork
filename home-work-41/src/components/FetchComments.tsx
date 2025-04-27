import {useState, useEffect, ChangeEvent} from "react";
import axios, {AxiosResponse} from "axios";
import {ItemComment} from "../interfaces/ItemComment.interface.ts";
import Comment from "../components/Comment";

function FetchComments() {
    const [comments, setComments] = useState<ItemComment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [commentId, setCommentId] = useState<number>(1);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response: AxiosResponse<ItemComment[]> = await axios.get(` https://jsonplaceholder.typicode.com/comments?id=${commentId}` );
                setComments(response.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [commentId]);

    // Render first load and Error, before starting with list of comments. In case this list is heavy.
    if (loading) return <div>Comments are being loaded...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <label htmlFor="effectDemoFetchPosts">Comments for Post ID {commentId}:</label>
            <div>
                {
                    comments.map((comment: ItemComment) =>
                        <Comment
                            key={comment.id}
                            {...comment}
                        />

                    )
                }
            </div>
            <div>
                <input
                    type="number"
                    min={1}
                    max={100}
                    value={commentId}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        const valueId = Number(e.target.value);
                        if (valueId < 1 ) {
                            setCommentId(1);
                        } else if (valueId >= 1 && valueId <= 100) {
                            setCommentId(valueId);
                        } else { // >100
                            setCommentId(100);
                        }
                    }}
                />
            </div>
        </>
    );
}

export default FetchComments;