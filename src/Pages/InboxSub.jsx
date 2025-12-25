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
  const [Messages, setMessages] = useState("")

  useEffect(()=> {
    async function callRow(){
      const res = await supabase.from("Messages").select("*").eq("id",id);
      // console.log(res.data)
      setMessages(res.data[0]);
      setLoading(false);
    }
    callRow()
  },[])

  
if (loading) return <p>Loading...</p>;
    return ( <div className='body_div2'>
     <SideNav />
     <div className='body_div'>
      <div className='content'>
        <div className='card_1'>
      <h3 className='title1' >{Messages.FullName}</h3>
      <p className='login_p'>{Messages.Phone}</p>
      <p className='login_p'>{Messages.Email}</p>
      <p className='login_p'>{Messages.Date}</p>
      <p className='login_p'>{Messages.Message}</p>
        </div>
  <h3 className='title1'>Your Reply</h3>
            <div className='card1'>
               <p className='login_p'>Enter Your Reply</p>
            </div>
      </div>
     </div>
    </div>);
}
 
export default InboxSub;