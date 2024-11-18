import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PostBlog from "./components/PostBlog";
import NewPostForm from "./components/NewPostForm";


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://chameleon-blog-v2-data.onrender.com")
    .then((response) => response.json())
    .then((data) => 
      setPosts(data));
  }, []);

const addPost = (newPost) => {
  fetch("https://chameleon-blog-v2-data.onrender.com", {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
  .then ((response) => response.json())
  .then ((savedPost) => setPosts((prevPosts)=> [...prevPosts, savedPost]));
};

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<PostBlog posts={posts} />} />
          <Route path="/new" element={<NewPostForm addPost={addPost} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
