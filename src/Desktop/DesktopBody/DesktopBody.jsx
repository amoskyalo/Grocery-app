import React from 'react'
import HomeCourasel from '../HomeCourasel/HomeCourasel'
import SubCourasel from '../SubCourasel/SubCourasel'
import Products from '../Products/Products'
import Body from '../Body/Body'
import Specials from '../Special/Specials'
import Testimonials from '../Testimonials/Testimonials'
import News from '../News/News'
import Newsletter from '../NewsLetter/Newsletter'


const DesktopBody = () => {
  return (
    <>
      <HomeCourasel />
      <SubCourasel />
      <Body />
      <Products />
      <Specials />
      <Testimonials />
      <News />
      <Newsletter />
    </>
  )
}

export default DesktopBody