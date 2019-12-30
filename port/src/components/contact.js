import React from 'react';
import './contact.css';
import code from '../img/code-reg.png';


const Contact = () => {
    return (
        <div className="contact" style={{backgroundImage: `url(${code})`}}>
            <p className="phone">Phone: 314-605-0504</p>
            <p className="email">Email: toddmckenzie@hotmail.com</p>
            <div className="box">

            </div>
        </div>
    )
}

export default Contact;