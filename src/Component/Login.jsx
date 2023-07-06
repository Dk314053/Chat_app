import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <span className="logo">User Chat App</span>
        <span className="title">Log In</span>
        <form className='form'>
          
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
         
          <button>Sign in</button>
        </form>
        <p className='paraRegister'>You don't have an account? <Link to='/registration'>Register</Link>  </p>
      </div>
    </div>
  )
}

export default Login