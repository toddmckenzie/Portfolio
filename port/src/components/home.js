import React from 'react';
import './home.css';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';
import Box from './box';


const Home = () => {

    return (
        <div className="home">
            <Projects />
            <Skills />
            <div className="flex">
                <Box identity='About'/>
                <Box identity='Contact'/>
            </div>
            <Footer />
        </div>
    )
}


export default Home