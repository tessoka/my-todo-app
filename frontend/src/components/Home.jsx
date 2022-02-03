import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { backendUrl } from "../utility/ServerUrl"
import axios from 'axios'


const Home = () => {

  const [ useremail, setUseremail ] = useState("")
  const [ userpassword, setUserpassword ] = useState("")
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const login = async () => {
    try {
      const res = await axios.post(backendUrl + "/login", {email: useremail, password: userpassword})
      console.log(res)
      if (res.status === 200) {

// **************** LETS STORE USER DATA IN REDUX ****************

        setIsLoggedIn(true)
      }
      
    } catch (err) {
      console.log(err.response.data.msg)
    }
  }

  const handleClickLogin = (e) => {
    e.preventDefault()
    console.log("clicked login")
    login()
  }
  

  return (
    <>
    <div className="container container-home">

      <div className="logo-container">
        <div className="the-box">

        </div>
        <div className="text-box">
          <p>The</p>
          <p>RocketLab</p>
          <p>Godspeed to you!</p>
        </div>
      </div>

      <div className="login-container">
        <div className="login-text-box">
          <h1>Login</h1>
          <p>Welcome back. Please login to your account...</p>
        </div>
        <div className="the-box-small">

        </div>
        <form>
          <input type="text" placeholder="Email Address" value={useremail} onChange={(e) => setUseremail(e.target.value)} />
          <input type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
          <div className="login-btn-box">
            <button className="btn btn-cta" onClick={handleClickLogin} >Login</button>
            <Link to="/registration"><button className="btn">Sign Up!</button></Link>
          </div>
        </form>

      </div>

    </div>
    </>
  )
}

export default Home
