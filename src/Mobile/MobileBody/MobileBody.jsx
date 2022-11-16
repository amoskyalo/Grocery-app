import React from 'react'
import { Routes, Route } from 'react-router'
import MobileNav from '../MobileNav/MobileNav'
import MobileHome from '../MobileHome/MobileHome'
import MobileShop from '../MobileShop/MobileShop'

const MobileBody = () => {
  return (
    <div className='mobilebody'>
    <MobileNav />
    <div className="mobile-components">
        <Routes>
            <Route path='/home' element={<MobileHome />}/>
            <Route path='mobileshop' element={<MobileShop />}/>
        </Routes>
    </div>
    </div>
  )
}

export default MobileBody