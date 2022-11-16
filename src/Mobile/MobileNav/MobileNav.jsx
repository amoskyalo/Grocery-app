import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { HiShoppingBag } from 'react-icons/hi'
import { GiHelp } from 'react-icons/gi'
import { BsFillCartPlusFill } from 'react-icons/bs'
import './MobileNav.css'
import { useState } from 'react'

const MobileNav = () => {
    const [active, setActive] = useState("#");
  return (
    <nav className='mobileNav'>
        <ul className="mobileNavLinks">
                <Link to="home" onClick={()=> setActive("#")} className={`mobileNavLink ${active === '#' ? `navLinkActive` : ""}`}>
                    <p className="mobileLinkIcon"> <AiOutlineHome /></p>
                    <span className={`span ${active === '#' ? `nospan` : ""}`}>Home</span>
                </Link>
                <Link to="mobileshop" className={`mobileNavLink ${active === '1' ? `navLinkActive` : ""}`} onClick={()=> setActive("1")}>
                    <p className="mobileLinkIcon"> <HiShoppingBag /></p>
                    <span className={`span ${active === '1' ? `nospan` : ""}`}>Shop</span>
                </Link>
                <Link to="/" className={`mobileNavLink ${active === '2' ? `navLinkActive` : ""}`} onClick={()=> setActive("2")}>
                    <p className="mobileLinkIcon"> <GiHelp /></p>
                    <span className={`span ${active === '2' ? `nospan` : ""}`}>Contact Us</span>
                </Link>
                <Link to="/" className={`mobileNavLink ${active === '3' ? `navLinkActive` : ""}`} onClick={()=> setActive("3")}>
                    <p className="mobileLinkIcon"> <BsFillCartPlusFill /></p>
                    <span className={`span ${active === '3' ? `nospan` : ""}`}>Cart</span>
                </Link>
        </ul>
    </nav>
  )
}

export default MobileNav