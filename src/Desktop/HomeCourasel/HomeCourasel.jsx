import React from 'react'
import './HomeCourasel.css'
import Courasel, { CouraselItem } from '../../Courasel/Courasel'
import background1 from '../../Assets/grocery.jpg'
import background2 from '../../Assets/courasel.jpeg'

const HomeCourasel = () => {
  return (
    <div className='home-courasel'>
        <Courasel>
            <CouraselItem background={background1}>
                <div className="inner-contents">
                    <p className="title">GROGA</p>
                    <p className="desc">Vegetable 100% <br></br>Organic</p>
                    <p className="ingridients">Natural Health Care Ingridients</p>
                    <p className="percentage">50% Off</p>
                    <button>Shop Now</button>
                </div>
            </CouraselItem>
            <CouraselItem background={background2} height="75vh">
                <div className="inner-content">
                    <p className="title">Discount</p>
                    <p className="desc">Get Discounts 100% <br></br>and Enjoy</p>
                    <p className="ingridients">Natural Health Care Ingridients</p>
                    <p className="percentage">50% Off</p>
                    <button>Shop Now</button>
                </div>
            </CouraselItem>
        </Courasel>
    </div>
  )
}

export default HomeCourasel