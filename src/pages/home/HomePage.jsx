import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='page-wrapper'>
        <h1 className='heading'>Welcome to Food's Kitchen</h1>
        <button><Link to='/ProductMenu'>Go to menu</Link></button>
    </div>
  )
}

export default HomePage