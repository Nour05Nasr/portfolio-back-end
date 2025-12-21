import React, { Component, useEffect, useState  } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import TableRowMes from '../Common/TableRowMes';
import NavCta from '../Common/NavCta';
import TableTH from '../Common/TableTH';
import logo from '../../Assets/logo.svg';
import "./Table.css";

const Table4 = ({Message}) => {
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
//     const categories = [
// { id: "01", title: "UI/UX Design", projects: "03", thumbnail:{logo} },
// { id: "05", title: "Graphic Design", projects: "03", thumbnail: {logo} },
// { id: "01", title: "UI/UX Design", projects: "03", thumbnail: {logo} },
// { id: "01", title: "UI/Motion Graphics", projects: "03", thumbnail: {logo} },
// { id: "05", title: "Graphic Design", projects: "03", thumbnail: {logo} },
// { id: "06", title: "Art Direction", projects: "03", thumbnail: {logo} }
// ];


if (loading) return <p>Loading...</p>;
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<TableTH title= 'First Name' />
<TableTH title= 'Last Name' />
<TableTH title= 'Subject' />
<TableTH title= 'E-mail' />
<TableTH title= 'Date' />
{/* <button className="add-project-btn"><Plus size={18} />Add Category</button> */}
</tr>
</thead>

<tbody>
{
 Messages.map((Message) =>{
    return <TableRowMes key={Message.id} data={Message} />
    })}
</tbody>
</table>
</div>
</div>
);
}
export default Table4;