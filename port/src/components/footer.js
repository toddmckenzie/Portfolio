import React from 'react';
import './footer.css';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
    return (
        <div className="footer">
            <p className="copy">C 2020 Todd McKenzie</p>
            <a href="https://github.com/toddmckenzie" target="_blank">
                <img src={github} className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/todd-mckenzie-0431a7141/" target="_blank">
                <img src={linkedin} className="icons"/>
            </a>
        </div>
    )
}

export default Footer;