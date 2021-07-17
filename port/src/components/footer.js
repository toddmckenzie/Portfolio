import React from 'react';
import './footer.css';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
    //test
    return (
        <div className="footer">
            <p className="copy">C 2021 Todd McKenzie</p>
            <a href="https://github.com/toddmckenzie" target="_blank">
                <img src={github} className="icons" />
            </a>
        </div>
    )
}

export default Footer;