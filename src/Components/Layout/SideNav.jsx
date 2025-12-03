import React, { Component } from 'react';
import icon1 from '../../Assets/icon1.svg';
import logo from '../../Assets/logo.svg';
import NavCta from '../Common/NavCta';
import NavLi from '../Common/NavLi';
import './SideNav.css';

const SideNav = () => {
    return ( <>
    <div className=''>
        <img src={logo} alt="NN Logo" />
        <NavLi title="Dshboard" img={icon1} />
        {/* <NavCta cta ="Sign Out" /> */}
    </div>
    </> );
}
 
export default SideNav;