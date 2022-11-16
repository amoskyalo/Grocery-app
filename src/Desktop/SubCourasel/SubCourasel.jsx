import React from 'react'
import './SubCourasel.css'
import image1 from '../../Assets/sukuma.png'
import image2 from '../../Assets/oranges.png'

const SubCourasel = () => {
  return (
    <div className='contents'>
        <div className="contents-item" style={{backgroundImage: `url(${image1})`}}>
            <div className="contents-desc">
                <h3 className="desc-title">Veggies</h3>
                <p><span>100%</span> Organic <br></br>Products</p>
                <button>Buy Now</button>
            </div>
        </div>
        <div className="contents-item" style={{backgroundImage: `url(${image2})`}}>
            <div className="contents-desc">
                <h3 className="desc-title">Fruits</h3>
                <p><span>100%</span> Organic <br></br> Products</p>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default SubCourasel