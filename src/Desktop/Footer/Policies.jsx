import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'
import { FaShippingFast } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { FaHeadphonesAlt } from 'react-icons/fa'

const Policies = () => {
    const policiesData = [
        {imgSrc: FaShippingFast, type: "Free shipping", description: "Wordwide"},
        {imgSrc: IoIosCall, type: "Helpline", description: "+254000000000"},
        {imgSrc: FaHeadphonesAlt, type: "24X7 support", description: "Free for customers"},
        {imgSrc: TbTruckReturn, type: "Returns", description: "30 days free exchanges"}
    ];


  return (
    policiesData.map((policyData, i) =>
        <div className="policy" key={i}>
            <div className="policy-image">
                <policyData.imgSrc />
            </div>
            <div className="policy-description">
                <h3>{policyData.type}</h3>
                <p>{policyData.description}</p>
            </div>
        </div>
    )
  )
}

export default Policies