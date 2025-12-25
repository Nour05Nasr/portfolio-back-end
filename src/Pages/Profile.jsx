import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';
import SideNav from '../Components/Layout/SideNav';
import NavCta from '../Components/Common/NavCta';
import Toggle from '../Components/Common/Toggle';
import profilebg from '../Assets/profilebg.png';
import me from '../Assets/me.png';
import storage from '../Assets/storage.svg';
import social from '../Assets/social.svg';
import './Profile.css';

const Profile = () => {
          const [loading, setLoading] = useState(true);
          const [Profile, setProfile] = useState(""); 
  
              useEffect(() => {
                  
                  async function getAllProfile() {
                      const res = await supabase.from("Profile").select("*");
                      setProfile(res.data)
                      // console.log(res);
                      setLoading(false);
                  }  
                  getAllProfile();
              },[]); 
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

                if (loading) return <p>Loading...</p>;
    return ( <>
         {console.log(Profile)}
          <div className='body_div2'>
    <SideNav />
    <div className='body_div'>
      <div className='flex_row'>
            <div className='card1 card_column'>
            <div className='card_row'>
                </div>
              {/* <img className='me' src={me} alt="profile" /> */}
                  {
                    Profile.map((Profile) =>{
                      return <>
           <div className='card_column2 bottom'>
                    <img src={Profile.Bgimg} className='width_1' alt="bg" />
                  <div>
                    <img src={Profile.Proimg} alt="thumb" className="me" />
                  </div>
                  <h3 className="title1 no">{Profile.Name}</h3>
                  <p className="login_p  no bottom">{Profile.Title}</p>
              </div>
                  </>
            })}
                  {/* <h3 className='title1'>Nour Nasr</h3> */}
                  {/* <p className='login_p'>UI/UX Designer</p> */}
                  <p className="login_p  no bottom">{Profile.Title}</p>
                <img className='bottom' src={social} alt="" />
            </div>

            <div className='card1'>
                <div className=' card_column center'>
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


              {
                Profile.map((Profile) =>{
                  return <>
                      {/* <div className='card_column2'> */}
      <div className='flex_row'>
            <div className='card1'>
              <h3 className='title1'>General Information</h3>
              <h3 className="login_p bottom">{Profile.Info}</h3>
              {/* <p className='login_p'>I’m a UI/UX Designer, Art Director, Graphic Designer and Front-End Developer. As a UI/UX designer I help to make your ideas come to life into an impactful visual identity, and user-friendly experiences. From branding walking through UI/UX Design to front-end development. I the between creativity and functionality. With experience in branding, UI/UX Design, and digital product design, I make designs that do not only look great but also make a real impact. </p> */}
             <div className='card_row bottom'>
              <div className='profile_div'>
              <p className='label'>Education</p>
              <h3 className="login_p">{Profile.Education}</h3>
              {/* <h6 className='login_p'>Egypt University of Informatics</h6> */}
              </div>
              <div className='profile_div'>
              <p className='label'>Languages</p>
              {/* <h3 className="login_p">{Profile.Language}</h3> */}
              {/* <h6 className='login_p'>Egypt University of Informatics</h6> */}
              </div>
             </div>
             <div className='card_row bottom'>
              <div className='profile_div'>
              <p className='label'>Experience</p>
              <h3 className="login_p">{Profile.Experience}</h3>
              {/* <h6 className='login_p'>Egypt University of Informatics</h6> */}
              </div>
              <div className='profile_div'>
              <p className='label'>Specialization</p>
              <h3 className="login_p">{Profile.Specialization}</h3>
              {/* <h6 className='login_p'>Egypt University of Informatics</h6> */}
              </div>
             </div>
             <div className='card_row bottom'>
              <div className='profile_div'>
              <p className='label'>Skills</p>
              {/* <h3 className="login_p">{Profile.Skills}</h3> */}
              {/* <h6 className='login_p'>Egypt University of Informatics</h6> */}
              </div>
              <div className=' profile_div'>
              <p className='label'>Birthday</p>
              <h3 className="login_p">{Profile.Birthday}</h3>
              {/* <h6 className='login_p'>Egypt University of Informatics</h6> */}
              </div>
             </div>
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
        label="Reply to messages automatically"
        checked={settings.autoSignIn}
        onChange={() => handleToggle("autoreplay")}
      />

      <Toggle
        label="Notify me when subscribed to my newsletter"
        checked={settings.newsletter}
        onChange={() => handleToggle("newsletter")}
      />

      <Toggle
        label="Delete messages automatically after 30 days"
        checked={settings.newsletter}
        onChange={() => handleToggle("delete")}
      />

      <Toggle
        label="Sign out automatically"
        checked={settings.lightMode}
        onChange={() => handleToggle("signout")}
      />

            </div>
    
            </div>
        {/* </div> */}
                  </>
            })}

       </div>
    </div> 
    </>);
}
 
export default Profile;