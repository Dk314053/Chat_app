import React from 'react'
import './Navbar.css'
import professional from './photo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>User Chat</span>
      <div className='user'>
      <img
        src={professional}
       
        alt="media"
/>
<span>John</span>
<button>logout</button>

      </div>
      </div>
  )
}

export default Navbar