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

//     const projects = [
// { id: "01", category: "UI/UX Design", title: "Artmento App", thumbnail:{logo} },
// { id: "05", category: "Graphic Design", title: "Urban Edge", thumbnail: {logo} },
// { id: "01", category: "UI/UX Design", title: "Best For Juice", thumbnail: {logo} },
// { id: "01", category: "UI/Motion Graphics", title: "EUI SU Social Media", thumbnail: {logo} },
// { id: "05", category: "Graphic Design", title: "AR Escape Room Web", thumbnail: {logo} },
// { id: "06", category: "Art Direction", title: "ITN TV OS", thumbnail: {logo} }
// ];

if (loading) return <p>Loading...</p>;
return (<>
    {/* {console.log(Projects)} */}

<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<TableTH title= 'Thumbnail' />
<TableTH title= 'project Title' />
<TableTH title= 'Project Category' />
<TableTH title= 'Date' />
<TableTH title= 'ID' />
<button className="add-project-btn"><Plus size={18} />Add Project</button>
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