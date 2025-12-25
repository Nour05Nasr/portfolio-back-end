import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { supabase } from '../../Supabase';
import ActionButton from './ActionButton';
import logo from '../../Assets/logo.svg';
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
if (loading) return <p>Loading...</p>;
    return ( <>
         {/* {console.log(Pages)} */}
        {
         Pages.map((Page) =>{
            return <tr className="table-row row2">
<td>{Page.Title}</td>
<td>{Page.Number_of_sections}</td>
<td>{Page.History}</td>
<td><ActionButton /></td>
</tr>
            })}
    </>

);
}
export default TableRowPag;