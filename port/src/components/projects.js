import React, { useEffect, useState } from 'react';
import './projects.css';
import code from '../img/code-pro.png';
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
        </div>
    )
}

export default Projects;