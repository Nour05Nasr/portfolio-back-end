import React, { Component, useEffect, useState  } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import TableRowPag from '../Common/TableRowPag';
import NavCta from '../Common/NavCta';
import TableTH from '../Common/TableTH';
import logo from '../../Assets/logo.svg';
import "./Table.css";

const Table3 = ({Page}) => {
           const [loading, setLoading] = useState(true);
            const [Pages, setPages] = useState([]); 
    
                useEffect(() => {
                    
                    async function getAllPages() {
                        const res = await supabase.from("Pages").select("*");
                        setPages(res.data)
                        // console.log(res);
                        setLoading(false);
                    }  
                    getAllPages();
                },[]);
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<TableTH title= 'Page Title' />
<TableTH title= 'Number of projects' />
<TableTH title= 'Last Edited' />
<td>
    <Link  className="add-project-btn" to={"/CreateProject"}>
        <button className="add-project-btn"><Plus size={18} />Add Page</button>
    </Link>
</td>
</tr>
</thead>

<tbody>
{
 Pages.map((Page) =>{
    return <TableRowPag key={Page.id}  data={Page} />
    })}
</tbody>
</table>
</div>
</div>
);
}
export default Table3;