import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
    <div className='card1'>
        <div className='card_row'>
          <h3 className='title1'>Website Visits</h3>
         <select className="filter-btn"><option>October</option></select>
        </div>
        <img className='width_1' src={sales} alt="" />
    </div>
    <div className='card1'>
        <div className='card_row'>
          <h3 className='title1'>Visits Locations</h3>
        </div>
    <img className='width_1' src={visits} alt="" />
    </div>
    </div>
    </> );
}
 
export default Dashboard;