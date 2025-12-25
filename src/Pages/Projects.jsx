import React, { Component } from 'react';
import SideNav from '../Components/Layout/SideNav';
import Table from '../Components/Layout/Table';
import FilterBar from '../Components/Layout/FilterBar';
import './Projects.css';

const Projects = () => {
    return ( <div className='body_div3'>
     <SideNav />
      <div className='projects-content'>
        <FilterBar />
        <Table 
        Thumbnail='Thumbnail'
        />
      </div>
    </div>);
}
 
export default Projects;