import React, { useEffect, useState } from 'react';
import './about.css';
import family from '../img/family.png';
import todd from '../img/todd.jpg';
import hat from '../img/todd-hat.jpg';
import { Mixpanel } from './mixpanel.js';

const About = () => {

    useEffect(() => {
        window.scrollTo(0,850);
        Mixpanel.track("About clicked.");
    })

    return (
        <div className="about">
              <div className="about-para">
                <div className="about-words">
                    <h2>About me</h2>
                    <p>I grew up in a small town in southeast Kansas where sports were my life. I played basketball, football, baseball, tennis, soccer, cross country and even wrestled on the college level. Following my passion for human physicality and athleticism, I completed a bachelors degree in Human Biology from Cleveland University Kansas City. Shortly after graduating I moved to be closer to my girlfriend, who is now my wife, in St.Louis, MO, which is now my home. For 12 years, I worked for a chemical plant as a contracted Quality Control lab technician and later an Operator. During this time, my wife and I had 2 sets of twins (yes, you read that right, 4 children!).</p> 
                    
                </div>
                    <img src={todd} alt="picture of todd mckenzie" className="myphoto" />
                </div>
                <div className="about-para">
                    <img src={family} className="family"/>
                    <div className="bottom-words">
                        <p>In early 2019, I left work to attend Lambda School, a 30+ week long Full Stack Web Development and Computer Science school. At Lambda I learned HTML/CSS, LESS, SASS, Responsive Web Development, Javascript, React, Redux, Node.js, Jest, Express, and SQL. In the Computer Science focus, I mastered Python and got deep into algorithms, data structures, computer architecture and more. I learned how to efficiently problem solve and troubleshoot code, how to read the DOCs, and how to google like a developer. I spent many days coding for 12 hours straight, pausing only to watching tutorials, and help my peers troubleshoot their code. Throughout it all, I juggled a family and husband duties.</p>
                    </div>
                </div>
                <div className="about-para">
                    <p className="super-bottom-words">My journey through Lambda was challenging, but resulted in a deep love for coding. For once in my life, I can truly say I have found an opportunity to pursue something I enjoy in my career. I love learning and making new apps that users love. I love being stuck on a problem and waking up in the middle of the night with the answer. In short, I am obsessed with code and aim to continue to develop into the best developer I can be.</p>
                    <img src={hat} className="hat" />
                </div>
            
          </div>
    )
}


export default About;