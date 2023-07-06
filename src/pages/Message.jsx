import React from 'react'
import professional from './photo.png'
import './Message.css'
const Message = () => {
  return (
    <div className='message owner'>
    <div className='messageInfo'> 
    <img className='infoimg' src={professional} alt='dummy img'/>
    <span>just now</span>
     </div>
      <div className='messageContent'>
<p>hello</p>
 <img className='contentimg' src={professional} alt='dummy img'/> 
      </div>  
    </div>
  )
}

export default Message