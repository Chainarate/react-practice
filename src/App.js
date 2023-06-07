import React from 'react'
import './App.css'
import NavBar from './component/NavBar'
import Greeting from './component/Greeting'
import Post from './component/Post'

// Data from Database

const posts = [
  {
    id: 1,
    title: `Let's learn React!`,
  },
  {
    id: 2,
    title: `How to install Node.js`,
  },
  {
    id: 3,
    title: `Basic HTML`,
  },
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <Greeting name="Gen" />
      <Greeting name="Geno" />
      {posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  )
}

export default App
