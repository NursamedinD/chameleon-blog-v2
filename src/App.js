import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PostBlog from "./components/PostBlog";
import NewPostForm from "./components/NewPostForm";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostBlog />} />
          <Route path="/new" element={<NewPostForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
