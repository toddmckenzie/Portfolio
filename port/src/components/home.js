import React, { useEffect } from 'react';
import './home.css';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';
import AboutBox from './aboutbox';
import ContactBox from './contactbox'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className="home">
            <Projects />
            <Skills />
            <div className="flex">
                <AboutBox info="about" />
                <ContactBox info="contact"/>
            </div>
            <Footer />
        </div>
    )
}


export default Home