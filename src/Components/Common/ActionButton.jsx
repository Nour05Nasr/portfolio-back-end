import React, { Component, useEffect, useState } from 'react';
// import { supabase } from '../Supabase';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import { Eye, Edit, Trash2 } from "lucide-react";
import "./ActionButton.css";

const ActionButton = (props) => {
    const {id} = useParams ()
    // const [proj, setProjects] = useState("")
    // async function deleteRow(id) {
    //     const res = await supabase.from("Projects").delete().eq("id",id)
    // }
    return ( 
            <div className="action-buttons">
                <button className="action-button"><Eye size={18} /></button>
                <Link className='action-button' to={"/ProjectEditor/:id"+3}>
                <button><Edit size={18} /></button>
                </Link>
                {/* <button onClick={()=>deleteRow(m.id)} className="action-button delete"><Trash2 size={18} /></button> */}
            </div>
);
}
export default ActionButton;