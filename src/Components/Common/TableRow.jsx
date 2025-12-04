import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ActionButton from './ActionButton';
import "./TableRow.css";

const TableRow = (props) => {
    return ( 
<tr className="table-row row2">
<td>
<img src={props.thumbnail} alt="thumb" className="thumb-img" />
</td>
<td>{props.category}</td>
<td>{props.title}</td>
<td>{props.id}</td>
<td><ActionButton /></td>
</tr>
);
}
export default TableRow;