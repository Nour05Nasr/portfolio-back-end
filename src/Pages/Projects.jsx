import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import Table from '../Components/Layout/Table';
import FilterBar from '../Components/Layout/FilterBar';
import piechart from '../Assets/piechart.png';
import './Projects.css';

const Projects = () => {
    return ( <div className='projects-page'>
     <SideNav />
      <div className='body_div projects-content'>
        <FilterBar />
        <Table />
      </div>
    </div>);
}
 
export default Projects;