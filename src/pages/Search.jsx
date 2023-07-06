import React from 'react'
import professional from './photo.png'
import './Search.css'

const Search = () => {
  return (
    <div className='search'>
<div className='searchform'>
  <input type='text' placeholder='Find a user'/>
</div>
<div className='userChat'>
<img className='searchimg' src={professional} alt='dummy img'/>
<div className='userChatInfo'>
  <span>Jane</span>
</div>
    </div>
    </div>
  )
}

export default Search