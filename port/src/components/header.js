import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import code from '../img/code-un.jpg';


//check to see which ways people think scrolling looks//
const Header = () => {

    const executeScroll = () => {
        setTimeout(() => {
            window.scrollTo(0, 850)
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
                        <a className="firsta" onClick={() => executeScroll()}>Projects</a>
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
                <p className="para">I'm a Full Stack Web Developer constantly striving to improve my skills and learn more about code optimization, debugging, and upgrades in technology. Fluent in JavaScript and Python and always adding new languages, libraries, and frameworks. Keep an eye out for projects being added with a Django back end.</p>
            </div>
            
        </div>
    )
    
}


export default Header;