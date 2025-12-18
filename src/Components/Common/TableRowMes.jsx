import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import logo from '../../Assets/logo.svg';
import "./TableRow.css";

const TableRowMes = ({Message}) => {
        const [loading, setLoading] = useState(true);
        const [Messages, setMessages] = useState(""); 

            useEffect(() => {
                
                async function getAllMessages() {
                    const res = await supabase.from("Messages").select("*");
                    setMessages(res.data)
                    // console.log(res);
                    setLoading(false);
                }  
                getAllMessages();
            },[]);

//     const projects = [
// { id: "01", category: "UI/UX Design", title: "Artmento App", thumbnail:{logo} },
// { id: "05", category: "Graphic Design", title: "Urban Edge", thumbnail: {logo} },
// { id: "01", category: "UI/UX Design", title: "Best For Juice", thumbnail: {logo} },
// { id: "01", category: "UI/Motion Graphics", title: "EUI SU Social Media", thumbnail: {logo} },
// { id: "05", category: "Graphic Design", title: "AR Escape Room Web", thumbnail: {logo} },
// { id: "06", category: "Art Direction", title: "ITN TV OS", thumbnail: {logo} }
// ];

if (loading) return <p>Loading...</p>;
    return ( <>
         {console.log(Messages)}
        {
         Messages.map((Message) =>{
            return <tr className="table-row row2">
<td>{Message.FirstName}</td>
<td>{Message.LastName}</td>
<td>{Message.Subject}</td>
<td>{Message.Email}</td>
<td>{Message.Date}</td>
<td><ActionButton /></td>
</tr>
            })}
    </>

);
}
export default TableRowMes;