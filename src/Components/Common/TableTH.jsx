import React, { Component } from 'react';
import { Plus } from "lucide-react";
import {Link} from 'react-router-dom';
import "./TableTH.css";


const TableTH = (props) => {
    return (<>
    <th className='title1'>{props.title}</th>
    </>  );
}
 
export default TableTH;