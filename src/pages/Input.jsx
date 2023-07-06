import React from 'react'
import './Input.css'
import { BiImageAdd } from 'react-icons/bi';
import { IoMdAttach } from 'react-icons/io';

const Input = () => {
  return (
    <div className='input'>
        <input type='text' placeholder='Type something...'/>
        <div className='send'>
            <IoMdAttach className='inputimg'/>
            <input type='file' style={{display:"none"}} id='file'/>
            <label htmlFor='file'>
        < BiImageAdd className='inputimg'/>
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input