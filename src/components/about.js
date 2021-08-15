import React, { useEffect } from 'react';
import './about.css';
import aboutData from './aboutData.js';

const About = () => {

    useEffect(() => {
        window.scrollTo(0,850);
    })

    
    return (
        <div className="about">
            <h1>About Me</h1>
            {
                aboutData.map(item => {
                    if (item.id % 2 === 0){
                        return <div className="abt-flex">
                                    <img className ="aboutme-img-2 mobile" src={item.img} alt={item.altImg}/>
                                    <p className="words mobile">{item.paragraph}</p>
                                </div>
                    } else {
                        return <div className="abt-flex">
                                    <p className="words mobile">{item.paragraph}</p>
                                    <img className="aboutme-img mobile" src={item.img} alt={item.altImg}/>
                                </div>
                    }
                })
            }
            
        </div>
    )
}


export default About;