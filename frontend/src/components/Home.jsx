import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  

  return (
    <div className='container container-home'>
      <h2>Welcome to the ToDo App!</h2>
      <div className="home-btn-box">
        <Link to="/registration"><button className="btn btn-cta">Sign Up!</button></Link>
        <Link to="/login"><button className="btn btn-cta">Login</button></Link>
      </div>
    </div>
  )
}

export default Home
