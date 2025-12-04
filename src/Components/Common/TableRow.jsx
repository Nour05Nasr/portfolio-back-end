import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ActionButton from './ActionButton';
import logo from '../../Assets/logo.svg';
import "./TableRow.css";

const TableRow = ({project}) => {
    const projects = [
{ id: "01", category: "UI/UX Design", title: "Artmento App", thumbnail:{logo} },
{ id: "05", category: "Graphic Design", title: "Urban Edge", thumbnail: {logo} },
{ id: "01", category: "UI/UX Design", title: "Best For Juice", thumbnail: {logo} },
{ id: "01", category: "UI/Motion Graphics", title: "EUI SU Social Media", thumbnail: {logo} },
{ id: "05", category: "Graphic Design", title: "AR Escape Room Web", thumbnail: {logo} },
{ id: "06", category: "Art Direction", title: "ITN TV OS", thumbnail: {logo} }
];
    return ( 
<tr className="table-row row2">
<td>
<img src={project.thumbnail} alt="thumb" className="thumb-img" />
</td>
<td>{project.category}</td>
<td>{project.title}</td>
<td>{project.id}</td>
<td><ActionButton /></td>
</tr>
);
}
export default TableRow;