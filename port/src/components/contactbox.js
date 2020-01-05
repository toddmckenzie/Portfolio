import React from 'react';
import './box.css'
import { Link } from 'react-router-dom';

const ContactBox = () => {
    return (
        <div className="halfC">
        <Link to="/contact">
            <div className="circle">
                <p className="ach">Contact</p>
            </div>
        </Link>
        </div>
    )
}

export default ContactBox;