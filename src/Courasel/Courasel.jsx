import React, { useEffect, useState } from 'react'
import './Courasel.css'
import {  IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export const CouraselItem = ({ children, width, background }) =>{
    return(
        <div className="courasel-item" style={{width:width, backgroundImage: `url(${background})`,
        backgroundPosition: "left"}}>
            {children}
        </div>
    );
}
const Courasel = ( { children }) => {
    const [currentIndex, setIndex] = useState(0);
    const setCurrentIndex = (newIndex) =>{
        if(newIndex <= 0){
            newIndex = React.Children.count(children) - 1;
        }else if(newIndex >= React.Children.count(children)){
            newIndex = 0;
        }
        setIndex(newIndex);
    };

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex + 1);
        }, 3000);

        return () =>{
            if(interval){
                clearInterval(interval);
            }
        }
    })

  return (
    <div className='courasel'>
        <div className="inner" style={{transform: `translate(-${currentIndex * 100}%)`}}>
            {React.Children.map(children, (child)=>{
                return React.cloneElement(child, {width: "100%"});
            })};
        </div>
        <div className='arrows'>
            <IoIosArrowBack className="left" onClick={()=> setCurrentIndex(currentIndex - 1)}/>
            <IoIosArrowForward className="right" onClick={() => setCurrentIndex(currentIndex + 1)}/>
        </div>
    </div>
  );
};

export default Courasel