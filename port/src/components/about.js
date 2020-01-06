import React, { useEffect, useState } from 'react';
import './about.css';
import family from '../img/family.png';
import todd from '../img/todd.jpg';
import hat from '../img/todd-hat.jpg';
import ContactBox from './contactbox';
import AboutBox from './aboutbox';
import Footer from './footer';

const About = () => {

    return (
        <div className="about">
              {/* <div>
                  <img src={family} className="family"/>
              </div> */}
              <div className="about-para">
                <div className="about-words">
                    <h2>About me</h2>
                    <p>I grew up in a small town in southeast Kansas where sports were my life.  Along with other sports I also wrestled growing up and wrestled a couple of years in college. After I stopped wrestling I had little idea or direction with what I wanted to do with my life so I bounced around a little before I finished a bachelors degree in Human Biology from Cleveland University Kansas City.  Shortly after graduating I moved to St. Louis to be closer to my girlfriend, who is now my wife.  I started working for a chemical plant as a contracted Quality Control lab technician.  When that job ended I took an operator position with the same company.  I ended up working there for a little over 12 years.  During this period my wife and I had 2 sets of twins.</p> 
                    
                </div>
                    <img src={todd} alt="picture of todd mckenzie" className="myphoto" />
                </div>
                <div className="about-para">
                    <img src={family} className="family"/>
                    <div className="bottom-words">
                        <p>Leaving my job was difficult because it paid extremely well, I had people counting on me to make money, and my wife was not working since she was taking care of our 4 children who are 5 and 3.  My wife agreed to work weekends to allow me to pursue my passion.  The reason I left was because I developed a love for coding.  I started learning python on the side of work and family, and I became hooked.  For once in my life I had found an opportunity to do something I enjoyed.  I love learning and making new apps that users love.  I love being stuck on a problem and waking up in the middle of the night with the answer.  I am obsessed with code and want to grow to become the best developer I can obtain.</p>
                    </div>
                </div>
                <div className="about-para">
                    <p className="super-bottom-words">I left work to attend Lambda School.  Lambda school is a 30 plus week fulltime full stack and computer science school.  At Lambda I learned HTML, CSS, LESS, SASS, responsive web development, Javascript, React, Redux, Node.js, Jest, Express, SQL.  In the computer science portion I learned more Python, algorithms, data structures, computer architecture and more.  I learned how to problem solve better, how to read the DOCs, and how to google a little better.  I spent many days working 12 hours a day coding, watching tutotrials through Lambda school and youtube, and solving problems.  I also continued to work on weekends in order to achieve my goals that I have for myself.</p>
                    <img src={hat} className="hat" />
                </div>
                <div className="flex">
                <AboutBox info="home"/>
                <ContactBox info="contact"/>
            </div>
                <Footer />
          </div>
    )
}


export default About;