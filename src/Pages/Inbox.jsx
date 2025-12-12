import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import Table from '../Components/Layout/Table';
import FilterBar from '../Components/Layout/FilterBar';
import './Inbox.css';

const Inbox = () => {
    return ( <div className='body_div2'>
     <SideNav />
      <div className='projects-content'>
        <FilterBar />
        <Table />
      </div>
    </div>);
}
 
export default Inbox;