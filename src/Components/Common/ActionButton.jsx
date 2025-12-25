import React, { Component, useEffect, useState } from 'react';
// import { supabase } from '../Supabase';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import { Eye, Edit, Trash2 } from "lucide-react";
import { supabase } from '../../Supabase';
import "./ActionButton.css";

const ActionButton = (props) => {
    const {id} = useParams ()
    const [Messages, setMessages] = useState([]); 
    const [Projects, setProjects] = useState([])

    async function deleteRow(id) {
        const res = await supabase.from("Messages").delete().eq("id",id)
    }
    return ( 
        <div className="action-buttons">
              {/* {Messages.map((Message) =>{
                  return <Link to={"/InboxSub/" + Message.id}> 
                    <button className='action-button'><Eye size={18} /></button>
                </Link>
                })} */}

                {/* {Projects.map((Project) =>{
                    return <Link to={"/ProjectEditor/" + Project.id}> 
                    <button className='action-button'><Edit size={18} /></button>
                </Link>
                })} */}

                <Link to={"/InboxSub/"}> 
                    <button className='action-button'><Eye size={18} /></button>   
                </Link>
                <Link to={"/ProjectEditor/" + id}> 
                    <button className='action-button'><Edit size={18} /></button>
                </Link>
                {/* {Messages.map((m)=>{
                    return  <button onClick={()=>deleteRow(m.id)}  className="action-button delete"><Trash2 size={18} /></button>
                })} */}
                  <button
    onClick={() => deleteRow(Messages.id)}
    className="action-button delete"
  >
    <Trash2 size={18} />
  </button>
            </div>
);
}
export default ActionButton;