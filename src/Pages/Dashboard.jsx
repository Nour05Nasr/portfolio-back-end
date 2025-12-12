import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SideNav from '../Components/Layout/SideNav';
import piechart1 from '../Assets/piechart1.png';
import piechart2 from '../Assets/piechart2.png';
import piechart3 from '../Assets/piechart3.png';
import sales from '../Assets/sales.png';
import visits from '../Assets/visits.png';
import './Dashboard.css';

const Dashboard = () => {
    return ( <div className='body_div2'>
    <SideNav />
    <div className='body_div'>
        <div className='card1'> 
            <div className='card_row'>
          <h3 className='title1'>Website Insights</h3>
        </div>
        <div className='card_row'>
                    <div className='flex_column'>
                        <div className='relative'>
                            <h1 className='nav_p chart'>80%</h1>
                        <img className='' src={piechart1} alt="" />
                        </div>
                        <p className='login_p'>Highest Traffic</p>
                    </div>
                    <div className='flex_column'>
                        <div className='relative'>
                            <h1 className='nav_p chart'>22%</h1>
                        <img className='' src={piechart2} alt="" />
                        </div>
                        <p className='login_p'>Lowest Traffic</p>
                    </div>
                    <div className='flex_column'>
                        <div className='relative'>
                            <h1 className='nav_p chart'>64%</h1>
                        <img className='' src={piechart3} alt="" />
                        </div>
                        <p className='login_p'>Most Visits</p>
                    </div>
                  <div className='flex_column'>
                        <div className='relative'>
                            <h1 className='nav_p chart'>22%</h1>
                        <img className='' src={piechart2} alt="" />
                        </div>
                        <p className='login_p'>Lowest Traffic</p>
                    </div>
                    <div className='flex_column'>
                        <div className='relative'>
                            <h1 className='nav_p chart'>82%</h1>
                        <img className='' src={piechart1} alt="" />
                        </div>
                        <p className='login_p'>Visits Growth</p>
                    </div>
                    <div className='flex_column'>
                        <div className='relative'>
                            <h1 className='nav_p chart'>64%</h1>
                        <img className='' src={piechart3} alt="" />
                        </div>
                        <p className='login_p'>Most Visits</p>
                    </div>
        </div>
    </div>

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
    </div> );
}
 
export default Dashboard;