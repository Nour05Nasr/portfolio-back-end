import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import { Eye, Edit, Trash2 } from "lucide-react";
import "./TableRow.css";

const TableRow = ({project}) => {
        const [loading, setLoading] = useState(true);
        const [Projects, setProjects] = useState([]); 

            useEffect(() => {
                
                async function getAllProjects() {
                    const res = await supabase.from("Projects").select("*");
                    setProjects(res.data)
                    // console.log(res);
                    setLoading(false);
                }  
                getAllProjects();
            },[]);

                async function deleteRow(id) {
                    const res = await supabase.from("Projects").delete().eq("id",id)
                }

// if (loading) return <p>Loading...</p>;
    return ( <>
         {/* {console.log(Projects)} */}
        {
         Projects.map((Project) =>{
            return <tr className="table-row row2">
<td>
<img src={Project.ThumbNail} alt="thumb" className="thumb_img" />
</td>
<td>{Project.Title}</td>
            {/* {
                  Projects.Category.map((c)=>{
                   return <td>{c}</td>
        })} */}
        
{Array.isArray(Project.Category) && (
  <td>{Project.Category[0]}</td>
)}
<td>{Project.Date}</td>
<td>{Project.id}</td>
<td>
    <div className='action-buttons'>
    <Link to={"/ProjectViewer/" + Project.id}>
        <button className='action-button'><Eye size={18} /></button>
    </Link>
    <Link to={"/ProjectEditor/" + Project.id}>
        <button className='action-button'><Edit size={18} /></button>
    </Link>
     <button onClick={()=>deleteRow(Project.id)}  className="action-button delete"><Trash2 size={18} /></button>
    </div>
</td>
{/* <td><ActionButton/></td> */}
</tr>
            })}
    </>

);
}
export default TableRow;