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
            const[data, setData] = useState();
            // const [Projects, setProjects] = useState(); 
    
                useEffect(() => {
                    
                    async function getAllProjects(id) {
                        const res = await supabase.from("Projects").select("*");
                        setData(res.data[0])
                        // console.log(res);
                        setLoading(false);
                    }  
                    getAllProjects();
                },[]);

                if (loading) return <p>Loading...</p>;
return (
    <div className='body_div2'>
    {console.log(data.id)}
    <SideNav />
    <div className='body_div'>

        <h3 className='title1'>Project Thumbnail</h3>
            <div className='card1 card_column'>
            <div className='relative' >
                <img className='h1' src={upload} />            
            </div>
                <h3 className='title1'>Upload Files</h3>
                <p className='login_p'>PNG, JPG and GIF files are allowed</p>
            </div>

        <h3 className='title1'>Project Title</h3>
            <div className='card1'>
               <p className='login_p'>Enter Your Project Title</p>
            </div>

        <h3 className='title1'>Project Overview</h3>
            <div className='card1'>
               <p className='login_p'>Enter Your Project Overview</p>
            </div>

        <h3 className='title1'>Category Tags</h3>
            <div className='card1'>
               <p className='login_p'>Category selector</p>
            </div>

        <h3 className='title1'>Tools used</h3>
            <div className='card1'>
               <p className='login_p'>Tools Used</p>
            </div>

        <h3 className='title1'>Design Process</h3>
            <div className='card1'>
               <p className='login_p'>Enter Your Project Design Process</p>
            </div>
                  <div className='card1 card_column'>
            <div className='relative' >
                <img className='h1' src={upload} />            
            </div>
                <h3 className='title1'>Upload Files</h3>
                <p className='login_p'>PNG, JPG and GIF files are allowed</p>
            </div>
    </div>
        </div>);
 }
export default ProjectEditor;