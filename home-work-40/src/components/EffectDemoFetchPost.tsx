import {ItemPost} from "../interfaces/ItemPost.interface.tsx";
import { useState, useEffect } from "react";
import Post from "./Post.tsx";

export default function EffectDemoFetchPost() {
    const [posts, setPosts] = useState<ItemPost[]>([]);

    const fetchPosts = async () => {
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
            console.error('Error fetching posts', error);
        }
    }

    useEffect(() => {
      fetchPosts();
    }, [])

    return(
        <>
            <label htmlFor="effectDemoFetchPosts">Posts:</label>
            {
                posts.map((post: ItemPost) =>
                    <Post
                        key={post.id}
                        idUser={post.idUser}
                        id={post.id}
                        title={post.title}
                        body={post.body}/>
                )
            }
        </>
    )
}