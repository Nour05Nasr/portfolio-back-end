import React, { Component } from 'react';
import icon1 from '../../Assets/icon1.svg';
import icon2 from '../../Assets/icon2.svg';
import icon3 from '../../Assets/icon3.svg';
import icon4 from '../../Assets/icon4.svg';
import icon5 from '../../Assets/icon5.svg';
import icon6 from '../../Assets/icon6.svg';
import icon7 from '../../Assets/icon7.svg';
import logo from '../../Assets/logo.svg';
import NavCta from '../Common/NavCta';
import NavLi from '../Common/NavLi';
import './SideNav.css';

const SideNav = () => {
    return ( <>
    <div className='side_nav'>
        <img src={logo} alt="NN Logo" />
        <div className='inner_nav'>
        <NavLi title="Dshboard" url="/" img={icon1} />
        <NavLi title="Analytics" url="/Analytics" img={icon2} />
        <NavLi title="Categories" img={icon3} />
        <NavLi title="Projects" img={icon4} />
        <NavLi title="Pages" img={icon5} />
        <NavLi title="Inbox" img={icon6} />
        <NavLi title="Profile" img={icon7} />
        </div>
        <NavCta cta ="Sign Out" />
    </div>
    </> );
}
 
export default SideNav;