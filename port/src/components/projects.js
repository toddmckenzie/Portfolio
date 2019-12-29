import React, { useEffect, useState } from 'react';
import './projects.css';
import code from '../img/code-pro.png';
import db from '../img/db.png';
import cloudstands from '../img/cloudstands.png';
import didact from '../img/didact.png';
import tweet from '../img/tweet-better.png';

const Projects = () => {
    const [ title, setTitle ] = useState('')
    const [ i, setI ] = useState(0);

    useEffect(() => {
        const about = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']
        setTimeout(function() {            
            if (i < about.length+1){
                setTitle(about.slice(0,i).join(''))
                setI(i + 1);
            }
        }, 300)
    },[title, i])
    // style={{backgroundImage: `url(${code})`}}
    return (
        <div className="projects">
            <h1>{title}</h1>
            <div className="dorothy">
                <img src={db} className="db-img"/>
                <div className="words bunker-words">
                    <p>Dorothy's Bunker was a side project that I built by myself using react native and redux on the front end and node.js with express framework on the backend.  I gathered storm locations in a spreadsheet and then used python to fetch the latitude and longitude from the google geocoding api to build my seed data for the backend. </p>
                    <p>
                    The ultimate goal was so users could find a storm shelter near them to go to if severe weather is in the area or approaching.  Users can pull open the shelter they are close to and comment on the status of the shelter. 
                    </p>
                    <p>
                    This mobile app was my first time working with react native but it was a simple transition since its so similar to reactJs.  Although I never released the app to the app store, you can find the app with the expo app at https://expo.io/@toddmckenzie/dorothysbunker.
                    </p>
                </div>
            </div>
                <div className="cloud-div">
                    <div className="words">
                        <p>www.cloudstands.com was a 8 week labs project with a team of 6 other developers, a UX designer, and a team lead.  The first 2 weeks consisted of planning our feature canvases and the tech stack we were going to use.  The next 6 weeks we coded to make a usable product.</p>
                        <p>The idea behind cloudstands was for small market owners and vendors to be able to get in contact with each other.  We built a site where the owner could put in the amount of booths the market had, the cost of the booths, and the days the market was open. The vendor could then get in there and rent booths from any market they wish to do business. The vendor could also see the other types of booths that was scheduled to be there that day in order to avoid be at a market with the same type of buisness.</p>
                        <p>My role on cloudstands was as a frontend developer.  We used ReactJs and Redux for state management.</p>
                    </div>
                    <img src={cloudstands} className="cloud" />

                </div>
                <div className="didact-div">
                    <img src={didact} className="didact-pic" />
                    <div className="words didact-words">
                        <p>www.didactlms.com was a labs project that I was lucky enough to be a team lead on.  I had a great group of developers and UX designer on my team.</p>
                        <p>
                        The idea behind the project was to be able to have a place that can bring in multiple online learning courses in order to create learning pathways that users can take.  The team was able to use udemy's api to get information on their courses onto the site by using the course url.  Users can also create their own pathways or manually plug in course data.  
                        </p>
                        <p>My role as a team lead was to conduct daily standups in the morning.  During these standups we would go over our trello board to see what everyone is working on or what needs to be accomplished on the day.  I also pair programmed with multiple developers, hooked up mixpanel analytics, built the landing page, and provided assistance when needed.</p>
                    </div>
                </div>

                <div className="tweet">
                    <div className="words tweet-words">
                        <p>Tweet better was the first react project that I helped build.  It was made during a build week after learning react.  Myself and another developer built the frontend in react and redux and the backend was built by two data scientists.</p>
                        <p>The idea behind tweet better was to evaluate your tweet before you actually post the tweet to twitter.  The backend rates the sentiment of the tweet and its displays the sentimate rating.</p>
                        <p>The site is located at https://tweetbetterapp.netlify.com/.</p>
                    </div>
                    <img src={tweet} className="tweet-pic" />
                </div>
        </div>
    )
}

export default Projects;