import React from 'react'

const Registration = () => {
  return (
    <div className='container-registration'>
      <h2>Registration</h2>

      <form>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Password again"/>
        <button className='btn btn-cta'>Sign up!</button>
      </form>

    </div>
  )
}

export default Registration
