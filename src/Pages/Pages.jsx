import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import Table3 from '../Components/Layout/Table3';
import FilterBar from '../Components/Layout/FilterBar';
import './Pages.css';

const Pages = () => {
    return ( <div className='body_div2'>
     <SideNav />
      <div className='projects-content'>
        <FilterBar />
        <Table3 />
      </div>
    </div>);
}
 
export default Pages;