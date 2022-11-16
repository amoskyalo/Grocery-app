import React from 'react'
import './Testimonials.css'
import Courasel, { CouraselItem } from '../../Courasel/Courasel'
import person from '../../Assets/person.png'
import quote from '../../Assets/quotation.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h2 className="testimonial-title">Our client say</h2>
        <p className="testimonial-text">Read what our clients say</p>
        <div className="testimonials-items">
            <Courasel>
                <CouraselItem>
                        <div className="testimonial-item">
                            <div className="person-info">
                                <div className="info-img">
                                    <img src={person} alt="" />
                                </div>
                                <div className="peron-names">
                                    <h3 className="person-name">Person Name</h3>
                                    <p className="person-post">Dentist</p>
                                </div>
                                <div className="quotation">
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <div className="person-text">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illum quaerat
                                     impedit sed, ut excepturi. Lorem ipsum dolor sit amet, 
                                     consectetur adipisicing elit. Quo amet possimus aspernatur tempore repudiandae dolorum?
                                </p>
                            </div>
                        </div>
                </CouraselItem>
                <CouraselItem>
                        <div className="testimonial-item">
                            <div className="person-info">
                                <div className="info-img">
                                    <img src={person} alt="" />
                                </div>
                                <div className="peron-names">
                                    <h3 className="person-name">Person Name</h3>
                                    <p className="person-post">Doctor</p>
                                </div>
                                <div className="quotation">
                                    <img src={quote} alt="" />
                                </div>
                            </div>
                            <div className="person-text">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illum quaerat
                                     impedit sed, ut excepturi. Lorem ipsum dolor sit amet, 
                                     consectetur adipisicing elit. Quo amet possimus aspernatur tempore repudiandae dolorum?
                                </p>
                            </div>
                        </div>
                </CouraselItem>
            </Courasel>
        </div>
    </div>
  )
}

export default Testimonials