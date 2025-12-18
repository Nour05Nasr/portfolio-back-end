import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import Table4 from '../Components/Layout/Table4';
import FilterBar from '../Components/Layout/FilterBar';
import './Inbox.css';

const Inbox = () => {
    return ( <div className='body_div2'>
     <SideNav />
      <div className='projects-content'>
        <FilterBar />
        <Table4 />
      </div>
    </div>);
}
 
export default Inbox;