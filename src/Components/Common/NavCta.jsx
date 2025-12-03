import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import signout from '../../Assets/signout.svg';
import './NavCta.css';

const NavCta = (props) => {
    return ( <>
    <Link className='nav_cta' to='/LogIn'>
        {props.cta}
        <img src={signout} alt="Sign Out icon" />
    </Link>
    </> );
}
 
export default NavCta;