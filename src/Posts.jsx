import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h2
        style={{ border: "2px solid rgb(187, 163, 175)", borderRadius: "15px" }}
      >
        Posts: {posts.length}
      </h2>
      {posts.map(post => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
