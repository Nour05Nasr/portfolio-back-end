import React, { Component, useState } from 'react';
import SideNav from '../Components/Layout/SideNav';
import upload from '../Assets/upload.svg';
import './ProjectEditor.css';

const ProjectEditor = () => {
return (
<div className='body_div2'>
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