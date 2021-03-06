import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bottomnav.css';
import phone from '../img/phone.png';
import portfolio from '../img/portfolio.png';
import home from '../img/home.png';
import man from '../img/man.png';
import { Mixpanel } from './mixpanel.js';

const BottomNav = () => {

    const executeScroll = () => {
        setTimeout(() => {
            window.scrollTo(0, 850)
            Mixpanel.track("Projects clicked")
        }, 10)
       
    }

    return (
        <div className="bottom-nav">
            
                <a className="bottom-anchors">
                    <Link to="/">
                    <div className="small-circle">
                        <img src={home} className="home-img" />
                    </div>
                    <p className="bottom-anc-words-home bottom-hover">Home</p>
                    </Link>
                </a>
            
            
                <a className="bottom-anchors" onClick={() => executeScroll()}>
                    <Link to="/">
                    <div className="small-circle">
                        <img src={portfolio} className="port-img" />
                    </div>
                    <p className="bottom-anc-words-projects bottom-hover">Projects</p>
                    </Link>
                </a>
            
            
            <a className="bottom-anchors">
                <Link to="/about">
                    <div className="small-circle">
                        <img src={man} className="man" />
                    </div>
                    <p className="bottom-anc-words-home bottom-hover">About</p>
                </Link>
            </a>
            
            
                <a className="bottom-anchors">
                    <Link to="/contact">
                    <div className="small-circle">
                        <img src={phone} className="phone-img" />
                    </div>
                    <p className="bottom-anc-words bottom-hover">Contact</p>
                    </Link>
                </a>
            
        </div>
    )
}

export default BottomNav;