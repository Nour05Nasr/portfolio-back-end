import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import { Eye, Edit, Trash2 } from "lucide-react";
import "./TableRow.css";

const TableRowPag = ({Page}) => {
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

                async function deleteRow(id) {
                    const res = await supabase.from("Pages").delete().eq("id",id)
                }

if (loading) return <p>Loading...</p>;
    return ( <>
         {/* {console.log(Pages)} */}
        {
         Pages.map((Page) =>{
            return <tr className="table-row row2">
<td>{Page.Title}</td>
<td>{Page.Number_of_sections}</td>
<td>{Page.History}</td>
<td>
    <div className='action-buttons'>
    <Link to={"/PageViewer/" + Page.id}>
        <button className='action-button'><Eye size={18} /></button>
    </Link>
    <Link to={"PageEditor/" + Page.id}>
        <button className='action-button'><Edit size={18} /></button>
    </Link>
     <button onClick={()=>deleteRow(Page.id)}  className="action-button delete"><Trash2 size={18} /></button>
    </div>
</td>
{/* <td><ActionButton /></td> */}
</tr>
            })}
    </>

);
}
export default TableRowPag;