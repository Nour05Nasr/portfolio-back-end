import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavLi.css';

const NavLi = (props) => {
    return ( <>
    <Link className='nav_li' to={props.url}>
            <img src={props.img} alt="icon" />
            <p className='nav_p'>{props.title}</p>
    </Link>
    </> );
}
 
export default NavLi;
