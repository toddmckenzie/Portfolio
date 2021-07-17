import React, { useEffect } from 'react';
import './home.css';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';
import { Mixpanel } from './mixpanel.js';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        Mixpanel.track("Home is clicked")
    })

    return (
        <div className="home">
            <Projects />
            <Skills />
        </div>
    )
}


export default Home