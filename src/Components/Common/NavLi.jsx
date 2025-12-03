import React, { Component } from 'react';
import './NavLi.css';

const NavLi = (props) => {
    return ( <>
    <div className='nav_li'>
        <img src={props.img} alt="icon" />
        <p className='nav_p'>{props.title}</p>
    </div>
    </> );
}
 
export default NavLi;
