import React from 'react';
import img from '../../images/headerImg.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
           <div className='header'>
        <h2>Knowledge Cafe</h2>
        <img src={img} alt="" />
      </div> 
        </div>
    );
};

export default Header;