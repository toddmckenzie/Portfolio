import React, { useEffect, useState } from 'react';
import './contact.css';
import code from '../img/code-reg.png';


const Contact = () => {


    return (
        <div className="contact" >
            <h1>UNDER CONSTRUCTION</h1>
            <h1 className="contact-title">Contact</h1>
            <div className="contact-box">
                <p className="phone">Phone: 314-605-0504</p>
                <p className="email">Email: mckenzie2215@gmail.com</p>
                <p className="linkedin">Linkedin: <a className="social" target="_blank" href="https://www.linkedin.com/in/todd-mckenzie-0431a7141/">Checkout my Linkedin profile</a></p>
                <p className="twitter">Twitter: <a className="social" target="_blank" href="https://twitter.com/ToddMcKenzie4">Checkout my Twitter profile</a></p>
                <p className="github">Github: <a className="social" target="_blank" href="https://github.com/toddmckenzie">Checkout my Github profile</a></p>
            </div>

        </div>
    )
}

export default Contact;