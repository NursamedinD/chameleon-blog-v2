import React, { useState } from 'react'

function NewPostForm({ addPost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      title: title,
      content: content,
      imageUrl: imageUrl,
    };

    addPost(newPost)
      setTitle('');
      setContent('');
      setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <h2>Add a New Post</h2>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label>Content</label>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <br />
        <label>Image</label>
        <input
          type="text"  
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <br />
      </div>
      <button type="submit">Add Post</button>
    </form>
  )
}

export default NewPostForm