import React, { Component } from 'react';
import signout from '../../Assets/signout.svg';
import './NavCta.css';

const NavCta = (props) => {
    return ( <>
    <div className='nav_cta'>
        {props.cta}
        <img src={signout} alt="" />
    </div>
    </> );
}
 
export default NavCta;