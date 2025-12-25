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
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<TableTH title= 'Thumbnail' />
<TableTH title= 'Category Title' />
<TableTH title= 'Number of projects' />
<td>
    <Link  className="add-project-btn" to={"/CreateProject"}>
        <button className="add-project-btn"><Plus size={18} />Add Category</button>
    </Link>
</td>
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