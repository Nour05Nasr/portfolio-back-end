import React, { Component, useEffect, useState } from 'react';
import SideNav from '../Components/Layout/SideNav';
import {Link} from 'react-router-dom';
import { supabase } from '../Supabase';
import {useParams} from 'react-router-dom'
import upload from '../Assets/upload.svg';
import './ProjectEditor.css';

const ProjectEditor = () => {
            const [loading, setLoading] = useState(true);
            
            const {id} = useParams();
            const [Projects, setProjects] = useState([]); 
            const [Tools, setTools] = useState([]); 
    

useEffect(() => {
  async function callProjects() {
    const { data, error } = await supabase.from("Projects").select("*").eq("id", id).single();

    if (!error) {
      setProjects(data);
      setLoading(false);
    }
  }

  callProjects();
}, [id]);


useEffect(() => {
  async function callTools() {
    const res = await supabase.from("Tools").select("*");

        setTools(res.data[0])
        setLoading(false);
  }

  callTools();
}, []);

                // useEffect(() => {
                    
                //     async function callProjects(id) {
                //          const res = await supabase.from("Projects").select("*").eq("id",id).single();
                //         setProjects(res.data); 
                //         // setProjects(res.data[0])
                //         // console.log(res);
                //         setLoading(false);
                //     }  
                //     callProjects();
                // },[]);
                

if (loading) return <p>Loading...</p>;
return (
    <div className='body_div2'>
    {/* {console.log(data.id)} */}
    <SideNav />
    
    <div className='body_div'>
        <form action="">
          <lable className='title1'>Project Thumbnail</lable>
            <div className='card1 card_column'>
            <div className='relative' >
                <img className='h1' src={upload} />            
            </div>
                <h3 className='title1'>Upload Files</h3>
                <p className='login_p'>PNG, JPG and GIF files are allowed</p>
            </div>
        </form>

        <form action="">
            <lable className='title1 bottom'>Project Title</lable>
            <input className='card1 login_p' type='text' value={Projects.Title} />
        </form>

        <form action="">
        <lable className='title1 bottom'>Project Overview</lable>
        <input className='card1 login_p' type='text' value={Projects.Overview} />
        </form>

        <form action="">
        <lable className='title1 bottom'>Category Tags</lable>
        <input className='card1 login_p' type='text' value={Projects.Category} />
        </form>

        <form action="">
        <lable className='title1 bottom'>Tools used</lable>
        <input className='card1 login_p' type='text' value={Tools.Name} />
        </form>

        <form action="">
        <lable className='title1 bottom'>Design Process</lable>
        <input className='card1 login_p' type='text' value={Projects.Process} />
        </form>

        <form className='bottom' action="">
          <lable className='title1'>Project Thumbnail</lable>
            <div className='card1 card_column'>
            <div className='relative' >
                <img className='h1' src={upload} />            
            </div>
                <h3 className='title1'>Upload Files</h3>
                <p className='login_p'>PNG, JPG and GIF files are allowed</p>
            </div>
        </form>
    </div>
        </div>);
 }
export default ProjectEditor;