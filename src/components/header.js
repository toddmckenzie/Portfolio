import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import code from '../img/code-un.jpg';
import { Mixpanel } from './mixpanel.js';

const Header = () => {
    const executeScroll = () => {
        setTimeout(() => {
            window.scrollTo(0, 850)
            Mixpanel.track("User")
        },200)
       
    }

    return (
        <div className="header-wrapper">
            <div className="header" />
            <div className="heading">
                <div className="top">
                    <Link to="/">
                    <a className="firsta">Home</a>
                    </Link>
                    <Link to="/">
                        <a className="firsta pro-line" onClick={() => executeScroll()}>Projects</a>
                    </Link>
                    <Link to="/about">
                        <a className="firsta about-line">About</a>
                    </Link>
                    <Link to="/contact">
                        <a className="firsta">Contact</a>
                    </Link>
                    <a href="https://resume.creddle.io/resume/2g4qe4avbqb" target="_blank">Resume</a>
                </div>
                <h1 className="name">Todd McKenzie</h1>
                <h3 className="web">Web Developer</h3>
                <p className="para">I'm a Full Stack Web Developer constantly striving to improve my skills and learn more about code optimization, debugging, and upgrades in technology. Fluent in JavaScript and Python and always adding new languages, libraries, and frameworks.</p>
            </div>
            
        </div>
    )
    
}


export default Header;