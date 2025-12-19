import React, { Component, useEffect, useState  } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import TableRowCat from '../Common/TableRowCat';
import NavCta from '../Common/NavCta';
import TableTH from '../Common/TableTH';
import logo from '../../Assets/logo.svg';
import "./Table.css";

const Table2 = ({Category}) => {
           const [loading, setLoading] = useState(true);
            const [Categories, setCategories] = useState([]); 
    
                useEffect(() => {
                    
                    async function getAllCategories() {
                        const res = await supabase.from("Categories").select("*");
                        setCategories(res.data)
                        console.log(res);
                        setLoading(false);
                    }  
                    getAllCategories();
                },[]);
//     const categories = [
// { id: "01", title: "UI/UX Design", projects: "03", thumbnail:{logo} },
// { id: "05", title: "Graphic Design", projects: "03", thumbnail: {logo} },
// { id: "01", title: "UI/UX Design", projects: "03", thumbnail: {logo} },
// { id: "01", title: "UI/Motion Graphics", projects: "03", thumbnail: {logo} },
// { id: "05", title: "Graphic Design", projects: "03", thumbnail: {logo} },
// { id: "06", title: "Art Direction", projects: "03", thumbnail: {logo} }
// ];
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<TableTH title= 'Thumbnail' />
<TableTH title= 'Category Title' />
<TableTH title= 'Number of projects' />
<button className="add-project-btn"><Plus size={18} />Add Category</button>
</tr>
</thead>

<tbody>
{
 Categories.map((Category) =>{
    return <TableRowCat key={Category.id}  data={Category} />
    })}
</tbody>
</table>
</div>
</div>
);
}
export default Table2;