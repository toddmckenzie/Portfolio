import React from 'react';
import './box.css'
import { Link } from 'react-router-dom';


const AboutBox = (props) => {
    return (
       <div className="halfA">
        <Link to={`/${props.info}`}>
            <div className="circle">
                <p className="ach">{props.info.charAt(0).toUpperCase() + props.info.slice(1)}</p>
            </div>
        </Link>
       </div>
    )
}

export default AboutBox;

