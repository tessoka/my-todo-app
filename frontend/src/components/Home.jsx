import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [ showRegistration, setRegistration ] = useState(false)

  const handleClickSignUp = () => {
    setRegistration(true)
  }

  return (
    <div>
      Welcome to the ToDo App!
      <Link to="/registration"><button className="btn btn-cta" onClick={handleClickSignUp}>Sign Up!</button></Link>
    </div>
  )
}

export default Home
