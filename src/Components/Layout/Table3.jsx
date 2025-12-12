import React, { Component } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import TableRow from '../Common/TableRow';
import NavCta from '../Common/NavCta';
import TableTH from '../Common/TableTH';
import logo from '../../Assets/logo.svg';
import "./Table.css";

const Table3 = ({props}) => {
    const categories = [
{ id: "01", title: "Home", projects: "08", thumbnail:{logo} },
{ id: "05", title: "About Me", projects: "03", thumbnail: {logo} },
{ id: "01", title: "Portfolio", projects: "04", thumbnail: {logo} },
{ id: "01", title: "Contact Me", projects: "02", thumbnail: {logo} },
{ id: "05", title: "Blogs", projects: "03", thumbnail: {logo} }
];
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
    <TableTH title= 'Page Cover Img' />
<TableTH title= 'Page Title' />
<TableTH title= 'Number of sections' />
<button className="add-project-btn"><Plus size={18} />Add Page</button>
</tr>
</thead>

<tbody>
{categories.map((p, i) => <TableRow key={i} project={p} />)}
</tbody>
</table>
</div>
</div>
);
}
export default Table3;