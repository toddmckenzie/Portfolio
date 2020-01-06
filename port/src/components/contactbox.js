import React from 'react';
import './box.css'
import { Link } from 'react-router-dom';

const ContactBox = (props) => {
    let site = (props.info === 'home') ? '' : 'contact'
    return (
        <div className="halfC">
        <Link to={`/${site}`}>
            <div className="circle">
                <p className="ach">{props.info.charAt(0).toUpperCase() + props.info.slice(1)}</p>
            </div>
        </Link>
        </div>
    )
}

export default ContactBox;