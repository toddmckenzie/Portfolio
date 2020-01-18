import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bottomnav.css';



const BottomNav = () => {

    const executeScroll = () => {
        setTimeout(() => {
            window.scrollTo(0, 850)
        }, 10)
       
    }

    return (
        <div className="bottom-nav">
            
                <a className="bottom-anchors">
                    <Link to="/">
                    <div className="small-circle">

                    </div>
                    <p className="bottom-anc-words-home bottom-hover">Home</p>
                    </Link>
                </a>
            
            
                <a className="bottom-anchors" onClick={() => executeScroll()}>
                    <Link to="/">
                    <div className="small-circle">

                    </div>
                    <p className="bottom-anc-words-projects bottom-hover">Projects</p>
                    </Link>
                </a>
            
            
            <a className="bottom-anchors">
                <Link to="/about">
                    <div className="small-circle">

                    </div>
                    <p className="bottom-anc-words-home bottom-hover">About</p>
                </Link>
            </a>
            
            
                <a className="bottom-anchors">
                    <Link to="/contact">
                    <div className="small-circle">

                    </div>
                    <p className="bottom-anc-words bottom-hover">Contact</p>
                    </Link>
                </a>
            
        </div>
    )
}

export default BottomNav;