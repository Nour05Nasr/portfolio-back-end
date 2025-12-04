import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import piechart from '../Assets/piechart.png';
import sales from '../Assets/sales.png';
import visits from '../Assets/visits.png';
import analysis from '../Assets/analysis.png';
import status from '../Assets/status.png';
import gra1 from '../Assets/gra1.png';
import gra2 from '../Assets/gra2.png';
import gra3 from '../Assets/gra3.png';
import gra4 from '../Assets/gra4.png';
import './Dashboard.css';

const Dashboard = () => {
    return ( <>
    <SideNav />
    <div className='body_div'>
        <div className='width_1'>
      <img src={gra1} alt="" />
      <img src={gra2} alt="" />
      <img src={gra3} alt="" />
      <img src={gra4} alt="" />
        </div>
        <div className='width_1'>
          <img  src={status} alt="" />
          <img  src={analysis} alt="" />
        </div>
       <img className='width_1' src={piechart} alt="" />
       <img className='width_1' src={sales} alt="" />
       <img className='width_1' src={visits} alt="" />
    </div>
    </> );
}
 
export default Dashboard;