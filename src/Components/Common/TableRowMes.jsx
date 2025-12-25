import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import { Eye, Edit, Trash2 } from "lucide-react";
import logo from '../../Assets/logo.svg';
import "./TableRow.css";

const TableRowMes = ({Message}) => {
        const [loading, setLoading] = useState(true);
        const [Messages, setMessages] = useState([]); 

            useEffect(() => {
                
                async function getAllMessages() {
                    const res = await supabase.from("Messages").select("*");
                    setMessages(res.data)
                    console.log(res);
                    setLoading(false);
                }  
                getAllMessages();
            },[]);

if (loading) return <p>Loading...</p>;
    return ( <>
         {console.log(Messages)}
  {
 Messages.map((Message) =>{
    // let pathLink = "/messages-details/" + Message.id;
    return <tr key={Message.id}  className="table-row row2">
<td>{Message.FullName}</td>
<td>{Message.Phone}</td>
<td>{Message.Email}</td>
<td>{Message.Date}</td>
    <Link to={"/InboxSub/" + Message.id}>
<button className='action-button'><Eye size={18} /></button>
    </Link>
<td><ActionButton /></td>
    </tr>
    })}
    </>

);
}
export default TableRowMes;