import React from 'react'
import visa from '../../Assets/visa.jpg'
import discover from '../../Assets/discover.jpeg'
import dinners from '../../Assets/dinners.png'
import paypal from '../../Assets/paypal.png'
import master from '../../Assets/master.png'
import express from '../../Assets/express.jpeg'
import mpesa from '../../Assets/mpesa.png'

const Payments = () => {
    const paymentMethods = [
        {imgSrc: mpesa},
        {imgSrc: visa},
        {imgSrc: discover},
        {imgSrc: dinners},
        {imgSrc: paypal},
        {imgSrc: master},
        {imgSrc: express}
    ]
  return (
    paymentMethods.map((paymentMethod, i) =>
        <div className='payment' key={i}>
            <img src={paymentMethod.imgSrc} alt="payment" />
        </div>
    )
  )
}

export default Payments