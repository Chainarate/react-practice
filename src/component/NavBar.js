import React from 'react'
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={classes.container}>
      <p className={classes.p}>NavBar</p>
      <button className={classes.button}>Login</button>
    </div>
  )
}

export default NavBar
