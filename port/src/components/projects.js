import React, { useEffect, useState } from 'react';
import './projects.css';
import db from '../img/db.png';
import cloudstands from '../img/cloudstands.png';
import didact from '../img/didact.png';
import tweet from '../img/tweet-better.png';

//need to change wording to match expectations of Lambdas requirements.....
//commit test 2

const Projects = () => {
 
    return (
        <div className="projects">
            <div className="dorothy">
                <div className="words bunker-words">
                    <h1 className="project-heading"><a href="https://expo.io/@toddmckenzie/dorothysbunker" target="_blank" className="project-heading db-heading">Dorothy's Bunker</a></h1>
                    <h3 className="role">Full Stack Developer</h3>
                    <p>Dorothy's Bunker is a solo-built project using React native and Redux on the front end and Node.js with express framework on the back end.  To create this mobile app, I started by gathering storm locations from various sources such as county government sites and local new stations and used Python to fetch the latitude and longitude from the Google Geocoding API to build my seed data for the back end.</p>
                    <p>
                    The ultimate goal was so users could find a nearby storm shelter when severe weather is approaching. Users can also pull open a profile for their nearby shelter and comment on the status of the shelter.
                    </p>
                    <p>
                    This mobile app was my first time working with React Native but it was a simple transition as it is so similar to ReactJs. You can access the app with the expo app at <a className="db-heading anchorT"href="https://expo.io/@toddmckenzie/dorothysbunker" target="_blank">expo.io/@toddmckenzie/dorothysbunker</a>.
                    </p>
                    <p>Github Code: <a href="https://github.com/SheltersBunkers/Frontend" className="db-heading" target="_blank" style={{fontSize: "26px", textDecoration: "underline"}}>Front End</a></p>
                    <p>Github Code: <a href="https://github.com/toddmckenzie/Maps-backend" className="db-heading" target="_blank"  style={{fontSize: "26px", textDecoration: "underline"}}>Back End</a></p>
                </div>
                <img src={db} className="db-img"/>
            </div>
                <div className="cloud-div">
                <img src={cloudstands} className="cloud" />
                    <div className="words">
                        <a href="https://www.cloudstands.com/landing" target="_blank"><h1 className="project-heading cloud-heading">Cloud Stands</h1></a>
                        <h3 className="role">Full Stack Developer</h3>
                        <p>Cloudstands was a 8 week Lambda Labs project with a team of 6 other developers, a UX designer, and a Team Lead. The first 2 weeks consisted of planning our feature canvases and the tech stack we would use. The next 6 weeks were spent coding to make a usable product.</p>
                        <p>Cloudstands is a website for small market owners and vendors to connect with each other. We built a site where the owner could put in the amount of booths the market had, the cost of the booths, and the days the market was open. The vendor could then access the site to rent booths from any market they wish to do business. The vendor could also view the other booths that were scheduled to be there that day in order to avoid competing in the same market with similar businesses.
                        My role on Cloudstands was as a full stack developer, responsible for building the Frontend layout and infrastructure. Site can be found at <a className="cloud-heading" href="https://www.cloudstands.com/landing" target="_blank">www.cloudstands.com</a></p>
                        <p>Github Code: <a href="https://github.com/labs14-market-organizer" target="_blank" className="cloud-heading" style={{textDecoration: "underline"}}>Front End / Back End</a></p>
                    </div>

                </div>
                <div className="didact-div">
                    <div className="words didact-words">
                        <a href="https://didactlms.com/landing" target="_blank"><h1 className="project-heading didact-heading">Didact</h1></a>
                        <h3 className="role">Team Lead</h3>
                        <p>Didact was a Lambda Labs project that I managed as Team Lead. I had a great group of 5 developers and 1 UX designer on my team.</p>
                        <p>
                        The Didact project create a website that collects multiple online learning courses to create one comprehensive learning pathways for users. The team was able to use Udemy’s API to collect course information using each courses’ url. Users could also create their own learning pathways or manually plug in course data from other MOOC sites. 
                        </p>
                        <p>As the Team Lead for this project, I lead daily standups to assess goals and workflow each morning. During these standups, the team would review our Trello board to align on tasks and methods. I also pair programmed with multiple developers to troubleshoot code issues, hooked up Mixpanel analytics, built the landing page, and provided assistance when needed. Site located at <a href="https://didactlms.com/landing" target="_blank" className="didact-heading">www.didactlms.com</a></p>
                        <p>Github Code: <a href="https://github.com/Lambda-School-Labs/didact-fe" target="_blank" className="didact-heading" style={{fontSize: "26px", textDecoration: "underline"}}>Front End</a></p>
                        <p>Github Code: <a href="https://github.com/Lambda-School-Labs/didact-be" target="_blank" className="didact-heading" style={{fontSize: "26px", textDecoration: "underline"}}>Back End</a></p>
                    </div>
                    
                    <img src={didact} className="didact-pic" />
                </div>
        
                <div className="tweet">
                <img src={tweet} className="tweet-pic" />
                    <div className="words tweet-words">
                    <a  href="https://tweetbetterapp.netlify.com" target="_blank">
                    <h1 className="project-heading TB-heading">Tweet Better</h1></a>
                    <h3 className="role">Frontend Developer</h3>
                        <p>Tweet better was the first react project that I built, created during a one-week Build week following a 3-week React Unit at Lambda School. Myself and another developer collaborated to create the Front end interface in React and Redux, while the Backend was built by two Data Scientists.</p>
                        <p>The idea behind Tweet Better was to evaluate the content of a Tweet before you post to Twitter. The Backend rated the sentiment of the tweet and the Frontend displayed this sentiment rating clearly to the user.
                        The site is located at  <a className="TB-heading anchorT" href="https://tweetbetterapp.netlify.com" target="_blank"> https://tweetbetterapp.netlify.com.</a></p>
                        <p>Github Code: <a href="https://github.com/tweet-better-build-week-2/Frontend" target="_blank" className="TB-heading" style={{fontSize: "26px", textDecoration: "underline"}}>Frontend</a></p>
                    </div>
                </div>
        </div>
    )
}

export default Projects;