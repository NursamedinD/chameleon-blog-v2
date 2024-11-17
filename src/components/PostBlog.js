import React from 'react';
import { useParams } from 'react-router-dom';

function PostBlog({posts}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

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