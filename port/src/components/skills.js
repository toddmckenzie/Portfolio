import React, { useState, useEffect } from 'react';
import './skills.css';

const Skills = () => {
    const [ title, setTitle ] = useState('')
    const [ i, setI ] = useState(0);

    useEffect(() => {
        const skills = ['S', 'k', 'i', 'l', 'l', 's']
        setTimeout(function() {            
            if (i < skills.length+1){
                setTitle(skills.slice(0,i).join(''))
                setI(i + 1);
            }
        }, 300)
    },[title, i])

    return (
        <div className="skills">
            <h1>{title}</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Less</li>
                <li>Sass</li>
                <li>ReactJs</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Styled Components</li>
                <li>Material UI</li>
                <li>Responsive Web Design</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Git</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Trello</li>
            </ul>
        </div>
    )
}

export default Skills;