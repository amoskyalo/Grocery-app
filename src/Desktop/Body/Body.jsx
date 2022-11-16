import React from 'react'
import './Body.css'
import oranges  from '../../Assets/oranges.png'
import sukuma from '../../Assets/sukuma.png'
import onions from '../../Assets/onions.png'

const Body = () => {
  return (
    <div className='body'>
      <h2 className="title">Our Products</h2>
      <div className="search-buttons">
        <div className="fruits">
          <img src={oranges} alt="" />
        </div>
        <div className="fruits">
          <img src={sukuma} alt="" />
        </div>
        <div className="fruits">
          <img src={onions} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body