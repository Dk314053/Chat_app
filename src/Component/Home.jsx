import React from 'react'
import Sidebar from '../pages/Sidebar'
import Chat from '../pages/Chat'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <div className='container'>
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home