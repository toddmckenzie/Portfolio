import React from 'react';
import './home.css';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';
import AboutBox from './aboutbox';
import ContactBox from './contactbox'

const Home = () => {

    return (
        <div className="home">
            <Projects />
            <Skills />
            <div className="flex">
                <AboutBox/>
                <ContactBox/>
            </div>
            <Footer />
        </div>
    )
}


export default Home