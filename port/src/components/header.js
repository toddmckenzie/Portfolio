import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import code from '../img/code-unsplash.jpg';


const Header = () => {

    return (
        <div className="header-wrapper">
            <div className="header" />
            <div className="heading">
                <div className="top">
                    <Link to="/">
                    <a className="firsta">Home</a>
                    </Link>
                    <Link to="/about">
                        <a className="firsta">About</a>
                    </Link>
                    <Link to="/contact">
                        <a className="firsta">Contact</a>
                    </Link>
                </div>
                <h1 className="name">Todd McKenzie</h1>
                <h3 className="web">Web Developer</h3>
                <p className="para">I'm a Full Stack Web Developer that is constantly striving to improve my skills and always learning.  I currently know JavaScript and Python but am always interested in learning new languages, libraries, and frameworks.  Checkout below.</p>
            </div>
            
        </div>
    )
    
}


export default Header;