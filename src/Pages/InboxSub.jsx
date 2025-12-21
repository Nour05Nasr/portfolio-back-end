import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";  
import { supabase } from '../Supabase';
import SideNav from '../Components/Layout/SideNav';
import Table4 from '../Components/Layout/Table4';
import FilterBar from '../Components/Layout/FilterBar';
import './Inbox.css';

const InboxSub = (params) => {
  const {id} = useParams ()
  const [Data, setData] = useState("")
  useEffect(()=> {
    async function callRow(){
      const res = await supabase.from("Messages").select("*").eq("id",id);
      setData(res.Data[0]);
    }
    callRow()
  },[])

    return ( <div className='body_div2'>
     <SideNav />
      <div className='projects-content'>

      </div>
    </div>);
}
 
export default InboxSub;