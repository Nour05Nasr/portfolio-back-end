import React, { Component } from 'react';
import { useParams } from "react-router-dom";  
import SideNav from '../Components/Layout/SideNav';
import Table4 from '../Components/Layout/Table4';
import FilterBar from '../Components/Layout/FilterBar';
import './Inbox.css';

const InboxSub = (params) => {
  const {id} = useParams ()
    return ( <div className='body_div2'>
     <SideNav />
      <div className='projects-content'>
        
      </div>
    </div>);
}
 
export default InboxSub;