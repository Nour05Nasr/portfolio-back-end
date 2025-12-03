import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import piechart from '../Assets/piechart.png';
import sales from '../Assets/sales.png';
import visits from '../Assets/visits.png';
import './Dashboard.css';

const Dashboard = () => {
    return ( <>
    <SideNav />
    <div className='body_div'>
    <img className='width_1' src={piechart} alt="" />
    <img className='width_1' src={sales} alt="" />
    <img className='width_1' src={visits} alt="" />
    </div>
    </> );
}
 
export default Dashboard;