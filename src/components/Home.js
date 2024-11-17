import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data));
  }, [])


  return (
    <div className='home'>
      <h1>Top posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.imageUrl} alt={post.title} style={{ width: "200px" }} />
          <Link to={`/post/${post.id}`}>Continue reading</Link>
        </div>
      ))}
    </div>
  );
}

export default Home