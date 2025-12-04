import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import me from '../Assets/me.png';
import email from '../Assets/email.svg';
import pass from '../Assets/pass.svg';
import checkbox from '../Assets/checkbox.svg';
import Button from '../Components/Common/Button';
import bgvideo from '../Assets/bgvideo.mp4';
import './LogIn.css';

const LogIn = () => {
    return ( <>
    <Helmet>
        <title>NourNasrBackEndLogIn</title>
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="LogIn" />
    </Helmet>

    {/* <div className='flex_column'> */}
<video className='mask1 video' autostart autoplay loop src={bgvideo}></video>
    <div className='login'>
        <img src={me} alt="" />
        <h1 className='h1'>Welcome Back!</h1>
        <div className='input_div'>
            <div className='input'>
                <img src={email} alt="e-mail icon" />
                <p className='nav_p'>Enter Your E-mail</p>
            </div>
            <div className=''>
                    <p className='login_p right'>Forgot Your Password ?</p>
            <div className='input'>
                <img src={pass} alt="password icon" />
                <p className='nav_p'>Enter Your Password</p>
            {/* <input type="text" title='Enter Your Password' /> */}
            </div>
                <div className='flex_row'>
                    <img src={checkbox} alt="check box" />
                    <p className='login_p'>Remember Me</p>
                </div>
            </div>
        </div>
        <Button url='/Dashboard' title='Log In'/>
    </div>
    <div className='video'>
    <video className='mask2 video' autostart autoplay loop src={bgvideo}></video>
    </div>
    {/* </div> */}
    </> );
}
 
export default LogIn;