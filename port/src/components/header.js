import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header">
            <Link to="/">
            <a className="first">Home</a>
            </Link>
            <Link to="/about">
                <a>About</a>
            </Link>
            <Link to="/projects">
                <a>Projects</a>
            </Link>
            <Link to="/skills">
                <a>Skills</a>
            </Link>
            {/* <Link to="/contact">
                <a className="/last">Contact</a>
            </Link> */}
        </header>
    )
    
}


export default Header;