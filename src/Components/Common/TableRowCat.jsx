import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import { Eye, Edit, Trash2 } from "lucide-react";
import "./TableRow.css";

const TableRowCat = ({Category}) => {
        const [loading, setLoading] = useState(true);
        const [Categories, setCategories] = useState([]); 

            useEffect(() => {
                
                async function getAllCategories() {
                    const res = await supabase.from("Categories").select("*");
                    setCategories(res.data)
                    // console.log(res);
                    setLoading(false);
                }  
                getAllCategories();
            },[]);

                async function deleteRow(id) {
                    const res = await supabase.from("Categories").delete().eq("id",id)
                }

if (loading) return <p>Loading...</p>;
    return ( <>
         {console.log(Categories)}
        {
         Categories.map((Category) =>{
            return <tr className="table-row row2">
<td>
<img src={Category.Hero_img} alt="thumb" className="hero_img" />
</td>
{/* <td>{project.Category}</td> */}
<td>{Category.Name}</td>
<td>{Category.Number_of_projects}</td>
<td>
    <div className='action-buttons'>
    <Link to={"/CategoryViewer/" + Category.id}>
        <button className='action-button'><Eye size={18} /></button>
    </Link>
    <Link to={"CategoryEditor/" + Category.id}>
        <button className='action-button'><Edit size={18} /></button>
    </Link>
     <button onClick={()=>deleteRow(Category.id)}  className="action-button delete"><Trash2 size={18} /></button>
    </div>
</td>
{/* <td><ActionButton /></td> */}
</tr>
            })}
    </>

);
}
export default TableRowCat;