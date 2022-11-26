import React from 'react'
import './Footer.css'
import groceryLogo from '../../Assets/grocery-logo.png'
import { AiOutlineHome, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { BsMailbox, BsTelephone } from 'react-icons/bs'
import FooterLink from './FooterLink'
import Payments from './Payments'
import Policies from './Policies'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-color">
            <div className="footer-links">
                <div className="footer-link">
                  <div className="footer-logo">
                    <img src={groceryLogo} alt="" />
                  </div>
                  <div className="adress">
                    <p className="adress-name"><AiOutlineHome />No: 58 A, East Madison Street,<br></br>
                      Baltimore, MD, USA 4508
                    </p>
                    <p className="call"><BsTelephone />+254 0000000</p>
                    <p className="mail"><BsMailbox />amos@example.com</p>
                  </div>
                </div>
                <FooterLink />
            </div>
            <div className="dividers"></div>
            <div className="footer-end">
              <p className="copyright"><AiOutlineCopyrightCircle />Amos's company</p>
              <div className="payments">
                <Payments />
              </div>
            </div>
        </div>
        <div className="policies">
          <Policies />
        </div>
    </div>
  )
}

export default Footer