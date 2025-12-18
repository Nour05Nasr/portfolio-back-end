import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import logo from '../../Assets/logo.svg';
import "./TableRow.css";

const TableRowCat = ({Category}) => {
        const [loading, setLoading] = useState(true);
        const [Categories, setCategories] = useState(""); 

            useEffect(() => {
                
                async function getAllCategories() {
                    const res = await supabase.from("Categories").select("*");
                    setCategories(res.data)
                    // console.log(res);
                    setLoading(false);
                }  
                getAllCategories();
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
         {console.log(Categories)}
        {
         Categories.map((Category) =>{
            return <tr className="table-row row2">
<td>
<img src={Category.Hero_img} alt="thumb" className="thumb_img" />
</td>
{/* <td>{project.Category}</td> */}
<td>{Category.Name}</td>
<td>{Category.Number_of_projects}</td>
<td>{Category.id}</td>
<td><ActionButton /></td>
</tr>
            })}
    </>

);
}
export default TableRowCat;