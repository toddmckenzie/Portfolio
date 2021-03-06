import React, { useEffect, useState } from 'react';
import './contact.css';
import { Mixpanel } from './mixpanel.js';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0,850)
        Mixpanel.track("Contact clicked")
    })

    return (
        <div className="contact" >
            <h1 className="contact-title">Contact Information</h1>
            <div className="contact-box">
                <p className="phone">Phone: 314-605-0504</p>
                <p className="email">Email: mckenzie2215@gmail.com</p>
                <p className="linkedin">Linkedin: <a className="social" target="_blank" href="https://www.linkedin.com/in/todd-mckenzie" >Check out my Linkedin profile</a></p>
                <p className="github">Github: <a className="social" target="_blank" href="https://github.com/toddmckenzie">Check out my Github profile</a></p>
            </div>
        </div>
    )
}

export default Contact;