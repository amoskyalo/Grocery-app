import React from 'react'
import HomeCourasel from '../../Desktop/HomeCourasel/HomeCourasel'
import Products from '../../Desktop/Products/Products'
import Body from '../../Desktop/Body/Body'
import Specials from '../../Desktop/Special/Specials'
import Testimonials from '../../Desktop/Testimonials/Testimonials'
import News from '../../Desktop/News/News'
import Newsletter from '../../Desktop/NewsLetter/Newsletter'


const MobileHome = () => {
  return (
    <div className='home' style={{paddingBottom: "5rem"}}>
        <HomeCourasel />
        <Body />
        <Products />
        <Specials />
        <Testimonials />
        <News />
        <Newsletter />
    </div>
  )
}

export default MobileHome