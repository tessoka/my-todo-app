import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from "../utility/ServerUrl"


const Login = () => {

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
    <div className="container container-registration">
      <h2>Login</h2>

      <form>
        <input type="text" placeholder="Email" value={useremail} onChange={(e) => setUseremail(e.target.value)} />
        <input type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
        <button className="btn btn-cta" onClick={handleClickLogin} >Login</button>
      </form>

    </div>
  )
}

export default Login
