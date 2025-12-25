import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";  
import { supabase } from '../Supabase';
import SideNav from '../Components/Layout/SideNav';
import Table4 from '../Components/Layout/Table4';
import FilterBar from '../Components/Layout/FilterBar';
import './Inbox.css';

const InboxSub = (params) => {
  const [loading, setLoading] = useState(true);
  const {id} = useParams ()
  const [Message, setMessage] = useState("")

  useEffect(()=> {
    async function callRow(){
      const res = await supabase.from("Messages").select("*").eq("id",id);
      console.log(res.data)
      setMessage(res.data[0]);
    }
    callRow()
  },[])

  
if (loading) return <p>Loading...</p>;
    return ( <div className='body_div2'>
     <SideNav />
      <div >
      <td>{Message.FullName}</td>
      <td>{Message.Phone}</td>
      <td>{Message.Email}</td>
      <td>{Message.Date}</td>
      <td>{Message.Message}</td>
      </div>
    </div>);
}
 
export default InboxSub;