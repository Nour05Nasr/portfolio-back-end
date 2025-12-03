import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Button.css';

const Button = (props) => {
    return ( 
        <>
            <Link className="cta_div" to={props.url}>
                <button className="cta_temp_1">{props.title}</button>
                {/* <div className="cta_bg"></div> */}
            </Link>
        </>
     );
}
 
export default Button;