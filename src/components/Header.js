import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>Chameleon Blog</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">New Post</Link></li>
      </ul>
    </nav>
  )
}

export default Header