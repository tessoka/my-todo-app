import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { backendUrl } from "../utility/ServerUrl"


const Registration = () => {

  const [ username, setUsername ] = useState("")
  const [ useremail, setUseremail ] = useState("")
  const [ userpassword, setUserpassword ] = useState("")
  const [ userpassword2, setUserpassword2 ] = useState("")
  const [ regStatus, setRegStatus ] = useState({status: false, msg: ""})
  const [ loginStatus, setLoginStatus ] = useState({status: false, msg: ""})
  
  const register = async () => {

    const newUser = {username, email: useremail, password: userpassword}

    try {
      const res = await axios.post(backendUrl + "/register", newUser)
      console.log(res)
      setRegStatus({status: true, msg: res.data.msg})
    } catch (err) {
      console.log(err.response.data.msg)
      setRegStatus({status: true, msg: err.response.data.msg})
    }
  }
 
  const handleClickReg = (e) => {
    e.preventDefault()
    setRegStatus({status: false, msg: ""})

    // VALIDATE PASSWORD
    if (userpassword === userpassword2) {
      register()
    } else {
      setRegStatus({status: true, msg: "Wrong passwords"})
    }
  }

  useEffect(() => {
    setRegStatus({status: false, msg: ""})
  }, [userpassword, userpassword2])


  return (
    <div className="container container-registration">
      <div className="register-text-box">
        <h1>Registration</h1>
        <p>Please provide username and email address for successful registration...</p>
      </div>
      <div className="the-box-small"></div>

      <form>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="Email" value={useremail} onChange={(e) => setUseremail(e.target.value)} />
        <input className={regStatus.msg === "Wrong passwords" ? "input-err" : ""} type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
        <input className={regStatus.msg === "Wrong passwords" ? "input-err" : ""} type="password" placeholder="Password again" value={userpassword2} onChange={(e) => setUserpassword2(e.target.value)} />
        <div className="reg-btn-box">
          <button className="btn btn-cta" onClick={handleClickReg} >{regStatus.status ? regStatus.msg : "Sign up!"}</button>
          <Link to="/"><button className="btn">Back</button></Link>
        </div>
      </form>

    </div>
  )
}

export default Registration
