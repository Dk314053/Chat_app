import React from 'react'
import professional from './photo.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
<img className='searchimg' src={professional} alt='dummy img'/>
<div className='userChatInfo'>
  <span>Jane</span>
  <p>Hello</p>
</div>
</div>
    </div>
  )
}

export default Chats