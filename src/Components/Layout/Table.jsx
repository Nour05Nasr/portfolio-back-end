import React, { Component, useEffect, useState } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import TableRow from '../Common/TableRow';
import TableTH from '../Common/TableTH';
import NavCta from '../Common/NavCta';
import logo from '../../Assets/logo.png';
import "./Table.css";

const Table = ({props}) => {
    const [loading, setLoading] = useState(true);
    const [Projects, setProjects] = useState(""); 

    useEffect(() => {
        
        async function getAllProjects() {
            const res = await supabase.from("Projects").select("*");
            setProjects(res.data)
            // console.log(res);
            setLoading(false);
        }  
        getAllProjects();
    },[]);
if (loading) return <p>Loading...</p>;
return (<>
    {/* {console.log(Projects)} */}

<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr className='head'>
<TableTH title= 'Thumbnail' />
<TableTH title= 'project Title' />
<TableTH title= 'Project Category' />
<TableTH title= 'Date' />
<TableTH title= 'ID' />
<td>
    <Link  className="add-project-btn" to={"/CreateProject"}>
        <button className="add-project-btn"><Plus size={18} />Add Project</button>
    </Link>
</td>
</tr>
</thead>

<tbody>
{
 Projects.map((Project) =>{
    return <TableRow key={Project.id} project={Project} />
    })}
</tbody>
</table>
</div>
</div>
</>);
}
export default Table;