import React, { Component } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import TableRow from '../Common/TableRow';
import TableTH from '../Common/TableTH';
import NavCta from '../Common/NavCta';
import logo from '../../Assets/logo.png';
import "./Table.css";

const Table = ({props}) => {
    const projects = [
{ id: "01", category: "UI/UX Design", title: "Artmento App", thumbnail:{logo} },
{ id: "05", category: "Graphic Design", title: "Urban Edge", thumbnail: {logo} },
{ id: "01", category: "UI/UX Design", title: "Best For Juice", thumbnail: {logo} },
{ id: "01", category: "UI/Motion Graphics", title: "EUI SU Social Media", thumbnail: {logo} },
{ id: "05", category: "Graphic Design", title: "AR Escape Room Web", thumbnail: {logo} },
{ id: "06", category: "Art Direction", title: "ITN TV OS", thumbnail: {logo} }
];
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<TableTH title= 'Thumbnail' />
<TableTH title= 'project Title' />
<TableTH title= 'Project Category' />
<TableTH title= 'ID' />
<button className="add-project-btn"><Plus size={18} />Add Project</button>
</tr>
</thead>

<tbody>
{projects.map((p, i) => <TableRow key={i} project={p} />)}
</tbody>
</table>
</div>
</div>
);
}
export default Table;