import React from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs';
import {BsPersonFillAdd } from 'react-icons/bs';
import {FiMoreHorizontal } from 'react-icons/fi';
import './Chat.css'
import Messages from './Messages';
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
        <BsFillCameraVideoFill className='icon'/>
        <BsPersonFillAdd className='icon'/>
        <FiMoreHorizontal className='icon'/>
    
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat