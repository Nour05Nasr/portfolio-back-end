import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SideNav from '../Components/Layout/SideNav';
import ActionButton from '../Components/Common/ActionButton';
import TableRow from '../Components/Common/TableRow';
import piechart from '../Assets/piechart.png';
import sales from '../Assets/sales.png';
import visits from '../Assets/visits.png';
import logo from '../Assets/logo.svg';
import './Dashboard.css';

const Dashboard = () => {
    return ( <>
    <SideNav />
    <div className='body_div'>
            <TableRow 
    thumbnail={logo}
    category='UI/UX Design'
    title='Artmento App'
    id='01'
    />
    <img className='width_1' src={piechart} alt="" />
    <img className='width_1' src={sales} alt="" />
    <img className='width_1' src={visits} alt="" />
    </div>
    </> );
}
 
export default Dashboard;