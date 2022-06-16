import React, { useEffect, useState } from 'react';
import './contact.css';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0,850)
    })

    return (
        <div className="contact" >
            <h1 className="contact-title">Contact Information</h1>
            <div className="contact-box">
                <p className="phone">Phone: 314-605-0504</p>
                <p className="email">Email: mckenzie2215@gmail.com</p>
                <p className="github">Github: <a className="social" target="_blank" rel="noreferrer" href="https://github.com/toddmckenzie">Check out my Github profile</a></p>
            </div>
        </div>
    )
}

export default Contact;