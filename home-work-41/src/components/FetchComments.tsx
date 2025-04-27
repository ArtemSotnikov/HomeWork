import { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import {ItemComment} from "../interfaces/ItemComment.interface.ts";
import Comment from "../components/Comment";

function FetchComments() {
    const [comments, setComments] = useState<ItemComment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response: AxiosResponse<ItemComment[]> = await axios.get('https://jsonplaceholder.typicode.com/comments');
                setComments(response.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    // Render first load and Error, before starting with list of comments. In case this list is heavy.
    if (loading) return <div>Comments are being loaded...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <label htmlFor="effectDemoFetchPosts">Comments:</label>
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
        </>
    );
}

export default FetchComments;