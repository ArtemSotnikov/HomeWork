import { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import {ItemComment} from "../interfaces/ItemComment.interface.ts";
import Comment from "../components/Comment";

function FetchComments() {
    const [comments, setComments] = useState<ItemComment[]>([]);

    useEffect(() => {
        // Make GET request to fetch data
        axios
            .get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response : AxiosResponse) => {
                setComments(response.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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