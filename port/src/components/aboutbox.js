import React from 'react';
import './box.css'
import { Link } from 'react-router-dom';


const AboutBox = (props) => {
    return (
       <div className="halfA">
        <Link to="/about">
            <div className="circle">
                <p className="ach">About Me</p>
            </div>
        </Link>
       </div>
    )
}

export default AboutBox;

