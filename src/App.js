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
    fetch("http://localhost:5000/posts")
    .then((response) => response.json())
    .then((data) => 
      setPosts(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<PostBlog posts={posts} />} />
          <Route path="/new" element={<NewPostForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
