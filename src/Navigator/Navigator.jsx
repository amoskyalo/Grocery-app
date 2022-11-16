import React from 'react'
import { Route, Routes } from 'react-router'
import './Navigator.css'
import DesktopBody from '../Desktop/DesktopBody/DesktopBody'
import Nav from '../Desktop/Nav/Nav'
import Footer from '../Desktop/Footer/Footer'
import Shop from '../Desktop/Shop/Shop'
import SingleProduct from '../Desktop/Shop/SingleProduct'

//mobile UI
import MobileLanding from '../Mobile/MobileLanding/MobileLanding'
import MobileBody from '../Mobile/MobileBody/MobileBody'


const Navigator = () => {
  return (
    <>
        <div className='desktop'>
        <Nav />
        <Routes>
            <Route path='/' element={<DesktopBody />}/>
            <Route path='/shop-products' element={<Shop />}/>
            <Route path='/shop-products/:id' element={<SingleProduct />}/>
        </Routes>
        <Footer />
        </div>

        <div className="mobile">
            <Routes>
                <Route path='/' element={<MobileLanding />}/>
                <Route path='/start//*' element={<MobileBody />}/>
            </Routes>
        </div>
    </>
  );
};

export default Navigator