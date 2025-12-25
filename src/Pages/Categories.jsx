import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import Table2 from '../Components/Layout/Table2';
import FilterBar from '../Components/Layout/FilterBar';
import './Categories.css';

const Categories = () => {
    return ( <div className='body_div3'>
     <SideNav />
      <div className='projects-content'>
        <FilterBar />
        <Table2 />
      </div>
    </div>);
}
 
export default Categories;