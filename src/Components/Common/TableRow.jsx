import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import logo from '../../Assets/logo.svg';
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
if (loading) return <p>Loading...</p>;
    return ( <>
         {console.log(Projects)}
        {
         Projects.map((Project) =>{
            return <tr className="table-row row2">
<td>
<img src={project.ThumbNail} alt="thumb" className="thumb_img" />
</td>
<td>{project.Title}</td>
{/* <td>{project.Category}</td> */}
<td>{project.Title}</td>
<td>{project.Date}</td>
<td>{project.id}</td>
<td><ActionButton/></td>
</tr>
            })}
    </>

);
}
export default TableRow;