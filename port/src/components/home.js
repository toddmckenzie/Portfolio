import React, { useEffect } from 'react';
import './home.css';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';


const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className="home">
            <Projects />
            <Skills />
        </div>
    )
}


export default Home