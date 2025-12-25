import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import sales from '../Assets/sales.png';
import visits from '../Assets/visits.png';
import analysis from '../Assets/analysis.png';
import status from '../Assets/status.png';
import piechart1 from '../Assets/piechart1.png';
import piechart2 from '../Assets/piechart2.png';
import piechart3 from '../Assets/piechart3.png';
import up from '../Assets/up.svg';
import './Analytics.css';

const Dashboard = () => {
    return ( <div className='body_div2'>
    <SideNav />
       <div className='body_div'>
         <div className='width_1'>
            <div className='flex_row'>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>99</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='card_row '>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>08</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='card_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>40</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='card_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            <div className='card1 flex_column'>
                <div className='num' >
                <h1 className='h1'>65</h1>
                </div>
                <p className='title1'>Total Project Views</p>
                <div className='card_row'>
                <img src={up} alt="" />
                <p className='login_p'>4% (30 days)</p>
                </div>
            </div>
            </div>
        </div>
            <div className='flex_row'>
                   <div className='card1'>
                                <div className='card_row'>
              <h3 className='title1'>Live Portfolio Status</h3>
            </div>
          <img className='width_1' src={status} alt="" />
                   </div>
                   <div className='card1'>
                                <div className='card_row'>
              <h3 className='title1'>Visitors Analytics</h3>
            </div>
          <img className='width_1' src={analysis} alt="" />
                   </div>
            </div>

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