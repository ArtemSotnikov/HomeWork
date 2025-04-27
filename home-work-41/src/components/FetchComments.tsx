import { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import {ItemComment} from "../interfaces/ItemComment.interface.ts";
import Comment from "../components/Comment";

function FetchComments() {
    const [comments, setComments] = useState<ItemComment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments1`)
            .then((response : AxiosResponse) => {
                setComments(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Render first load and Error, before starting with list of comments. In case this list is heavy.
    if (loading) return <div>Comment are being loaded...</div>;
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