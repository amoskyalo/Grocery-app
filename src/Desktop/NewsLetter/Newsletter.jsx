import React from 'react'
import './Newsletter.css'
import newsletterImage from '../../Assets/email.png'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>Subscribe to our Newsletter</h2>
        <form action="#" className='newsletterForm'>
            <input type="email" placeholder='Your email address'/>
            <input type="submit" value="Submit"/>
        </form>
        <div className="newsletter-image">
            <img src={newsletterImage} alt="" />
        </div>
    </div>
  )
}

export default Newsletter