import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  const { post } = props

  function handleClick(id) {
    alert(`Post id: ${id} clicked`)
  }

  return (
    <div onClick={() => handleClick(post.id)} className={classes.card}>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
    </div>
  )
}

export default Post
