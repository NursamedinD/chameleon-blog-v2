import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
    <nav>
      <h1>Chameleon Blog</h1>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/new">New Post</Link></button>
    </nav>
    </div>
  )
}

export default Header