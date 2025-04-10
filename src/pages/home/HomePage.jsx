import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='page-wrapper'>
        <h1 className='heading'>Welcome to Food's Kitchen</h1>
        <button onClick={() => {navigate('/ProductMenu')}}>Go to menu</button>
    </div>
  )
}

export default HomePage