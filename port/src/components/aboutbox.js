import React from 'react';
import './box.css'
import { Link } from 'react-router-dom';


//need to revisit to center words better at different media queries.

const AboutBox = (props) => {
    let site = (props.info === 'home') ? '' : 'about'
    return (
       <div className="halfA">
        <Link to={`/${site}`}>
            <div className="circle">
                <p className="ach">{props.info.charAt(0).toUpperCase() + props.info.slice(1)}</p>
            </div>
        </Link>
       </div>
    )
}

export default AboutBox;

