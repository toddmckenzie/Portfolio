import React, { useEffect, useState } from 'react';
import './projects.css';
import code from '../img/code-pro.png';
import db from '../img/db.png';

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
    return (
        <div style={{backgroundImage: `url(${code})`}} className="projects">
            <h1>{title}</h1>
            <div className="dorothy">
                <img src={db} className="db-img"/>
                <div className="words">
                    <p>Dorothy's Bunker was a side project that I built by myself using react native on the front end and node.js with express framework on the backend.  I gathered storm locations in a spreadsheet and then used python to fetch the latitude and longitude from the google geocoding api to build my seed data for the backend. </p>
                    <p>
                    The ultimate goal was so users could find a storm shelter near them to go to if severe weather is in the area or approaching.  Users can pull open the shelter they are close to and comment on the status of the shelter.  
                    </p>
                    <p>
                    This mobile app was my first time working with react native but it was a simple transition since its so similar to reactJs.  Although I never released the app to the app store, you can find the app with the expo app at https://expo.io/@toddmckenzie/dorothysbunker.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;