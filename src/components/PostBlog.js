import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';

function PostBlog() {
  const [posts, setPosts] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data));
  }, [id]);

  if (!post) return <p>Loading...may take a bit</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} style={{ width: "200px" }} />
      <p>{post.content}</p>
    </div>
  )
}

export default PostBlog