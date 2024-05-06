import React from 'react';

const Header = (props) => {
    return (
        <div className="navigation-bar">
      <div className="logo"><h1 >Swift<span >Cart</span></h1></div>
      <div className="nav-links">
        <ul>
            <li>Best Sellers</li>
            <li>Our Products</li>
            <li>Categories</li>
            <li>About us</li>
        </ul>
      </div>
      <div className="buttons">
        <button className='btn1'>Login</button>
        <div className='btncartwrap'>
        <button className='btn2' onClick={()=>{props.popupS(1)}}>My Cart</button>
        <div className='cartCount' >{props.headerCount}</div>
        </div>
      </div>
    </div>
    );
};

export default Header;