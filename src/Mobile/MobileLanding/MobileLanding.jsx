import React from 'react'
import './MobileLanding.css'
import Logo from '../../Assets/grocery-logo.png'
import { Link } from 'react-router-dom'

const MobileLanding = () => {
  return (
    <div className='landing'>
        <img src={Logo} alt="" />
        <p>Shop Your Daily Necessary</p>
        <button><Link to='start'>Get Started</Link></button>
    </div>
  )
}

export default MobileLanding