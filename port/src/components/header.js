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
                    <a className="first">Home</a>
                    </Link>
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                    <Link to="/contact">
                        <a className="last">Contact</a>
                    </Link>
                </div>
                <h1 className="name">Todd McKenzie</h1>
                <h3 className="web">Web Developer</h3>
                <p className="para">Hey I'm Todd. Checkout my projects below.</p>
            </div>
            
        </div>
    )
    
}


export default Header;