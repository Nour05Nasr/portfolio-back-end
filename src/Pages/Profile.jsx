import React, { Component, useState } from 'react';
import SideNav from '../Components/Layout/SideNav';
import NavCta from '../Components/Common/NavCta';
import Toggle from '../Components/Common/Toggle';
import profilebg from '../Assets/profilebg.png';
import me from '../Assets/me.png';
import storage from '../Assets/storage.svg';
import social from '../Assets/social.svg';
import './Profile.css';

const Profile = () => {
     const [settings, setSettings] = useState({
    lightMode: false,
    followEmail: true,
    meetups: false,
    contactEmail: true,
    autoSignIn: false,
    newsletter: true,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

    return ( <div className='body_div2'>
    <SideNav />
    <div className='body_div'>
      <div className='flex_row'>
            <div className='card1 card_column'>
            <div className='card_row'>
                </div>
              <img className='width_1'  src={profilebg} alt="bg" />
              <img className='me' src={me} alt="profile" />
              <div className='card_column'>
                  <h3 className='title1'>Nour Nasr</h3>
                  <p className='login_p'>UI/UX Designer</p>
              </div>
              <img  src={social} alt="" />
            </div>

            
            <div className='card1'>
              <h3 className='title1'>Settings</h3>
                   <Toggle
        label="Light Mode"
        checked={settings.lightMode}
        onChange={() => handleToggle("lightMode")}
      />

      <Toggle
        label="Email me when someone follows me"
        checked={settings.followEmail}
        onChange={() => handleToggle("followEmail")}
      />

      <Toggle
        label="Meetups near my notifications"
        checked={settings.meetups}
        onChange={() => handleToggle("meetups")}
      />

      <Toggle
        label="Email me when someone contacts me"
        checked={settings.contactEmail}
        onChange={() => handleToggle("contactEmail")}
      />

      <Toggle
        label="Sign in automatically"
        checked={settings.autoSignIn}
        onChange={() => handleToggle("autoSignIn")}
      />

      <Toggle
        label="Notify me when subscribed to my newsletter"
        checked={settings.newsletter}
        onChange={() => handleToggle("newsletter")}
      />
            </div>
        </div>



      <div className='flex_row'>
            <div className='card1'>
              <h3 className='title1'>General Information</h3>
              <p className='login_p'>I’m a UI/UX Designer, Art Director, Graphic Designer and Front-End Developer. As a UI/UX designer I help to make your ideas come to life into an impactful visual identity, and user-friendly experiences. From branding walking through UI/UX Design to front-end development. I the between creativity and functionality. With experience in branding, UI/UX Design, and digital product design, I make designs that do not only look great but also make a real impact. </p>
             <div className='card_row'>
              <div className='card_column'>
              <p className='label'>Education</p>
              <h6 className='login_p'>Egypt University of Informatics</h6>
              </div>
              <div className='card_column'>
              <p className='label'>Education</p>
              <h6 className='login_p'>Egypt University of Informatics</h6>
              </div>
             </div>
             <div className='card_row'>
              <div className='card_column'>
              <p className='label'>Education</p>
              <h6 className='login_p'>Egypt University of Informatics</h6>
              </div>
              <div className='card_column'>
              <p className='label'>Education</p>
              <h6 className='login_p'>Egypt University of Informatics</h6>
              </div>
             </div>
             <div className='card_row'>
              <div className='card_column'>
              <p className='label'>Education</p>
              <h6 className='login_p'>Egypt University of Informatics</h6>
              </div>
              <div className='card_column'>
              <p className='label'>Education</p>
              <h6 className='login_p'>Egypt University of Informatics</h6>
              </div>
             </div>
            </div>


            <div className='card1'>
                <div className=' card_column'>
            <div className='num2' >
                <img className='h1' src={storage} />            
            </div>
                <h3 className='title1'>Your Storage</h3>
                <p className='login_p'>Supervise your drive space in the easiest way</p>
                </div>
                <div className='card_row'>
                  <p className='login_p'>25.6 Gb</p>
                  <p className='login_p'>50 Gb</p>
                </div>
                <div className='load_div'>
                <hr className='loader' />
                <hr className='loader2' />
                </div>
            </div>
        </div>
       </div>
    </div>)
}
 
export default Profile;