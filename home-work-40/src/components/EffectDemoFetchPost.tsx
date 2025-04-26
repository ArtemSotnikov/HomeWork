import {ItemPost} from "../interfaces/ItemPost.interface.tsx";
import { useState, useEffect } from "react";
import Post from "./Post.tsx";

export default function EffectDemoFetchPost() {
    const [posts, setPosts] = useState<ItemPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchPosts = async () => {
        setLoading(true);

        try {
            await new Promise(resolve => {
                setTimeout(resolve, 3000);
            });
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            if (!response.ok) {
                throw new Error('Network response did not work');
            }
            const data: ItemPost[] = await response.json();
            setPosts(data);
        } catch (error) {
            const errorMessage = (error as Error).message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      fetchPosts();
    }, [])

    return(
        <>
            <label htmlFor="effectDemoFetchPosts">Posts:</label>
            <div>
                {
                posts.map((post: ItemPost) =>
                    <Post
                        key={post.id}
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}/>
                )
            }
            </div>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error"><b>{error}</b></p>}
        </>
    )
}