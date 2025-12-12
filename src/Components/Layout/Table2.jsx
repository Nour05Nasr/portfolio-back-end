import React, { Component } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import TableRow from '../Common/TableRow';
import NavCta from '../Common/NavCta';
import logo from '../../Assets/logo.svg';
import "./Table.css";

const Table2 = ({props}) => {
    const categories = [
{ id: "01", title: "UI/UX Design", projects: "03", thumbnail:{logo} },
{ id: "05", title: "Graphic Design", projects: "03", thumbnail: {logo} },
{ id: "01", title: "UI/UX Design", projects: "03", thumbnail: {logo} },
{ id: "01", title: "UI/Motion Graphics", projects: "03", thumbnail: {logo} },
{ id: "05", title: "Graphic Design", projects: "03", thumbnail: {logo} },
{ id: "06", title: "Art Direction", projects: "03", thumbnail: {logo} }
];
return (
<div className="table-container">

<div className="table-wrapper">
<table>
<thead>
<tr>
<th className='title1'>Hero Img</th>
<th className='title1'>Category Title</th>
<th className='title1'>Number of projects</th>
<button className="add-project-btn"><Plus size={18} />(props.Add)</button>
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
export default Table2;