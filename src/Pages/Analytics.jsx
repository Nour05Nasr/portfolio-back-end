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
import up from '../Assets/up.svg';
import './Analytics.css';

const Dashboard = () => {
    return ( <>
    <SideNav />
       <div className='body_div'>
         <div className='width_1'>
            <div className='flex_row'>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>99</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='flex_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>08</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='flex_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>40</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='flex_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>65</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='flex_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            </div>
        </div>
            <div className='flex_row'>
                   <div className='card1'>
                                <div className='card_row'>
              <h3 className='title1'>Visits Locations</h3>
            </div>
          <img  src={status} alt="" />
                   </div>
                   <div className='card1'>
                                <div className='card_row'>
              <h3 className='title1'>Visits Locations</h3>
            </div>
          <img  src={analysis} alt="" />
                   </div>
            </div>
        <div className='width_1'>
        </div>
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