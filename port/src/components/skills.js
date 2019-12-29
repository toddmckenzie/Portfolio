import React, { useState, useEffect } from 'react';
import './skills.css';
import code from '../img/code-be.png';


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
        <div className="skills" style={{backgroundImage: `url(${code})`}}>
            <h1>{title}</h1>
            <div className="box">
                <ul>
                <div className="row">
                    <li className="li-1">HTML</li>
                    <li>CSS</li>
                </div>
                <div className="row">
                    <li className="li-1">Less</li>
                    <li>Sass</li>
                </div>
                <div className="row">
                    <li className="li-1">ReactJs</li>
                    <li>React Native</li>
                </div>
                <div className="row">
                    <li className="li-1">Redux</li>
                    <li>Styled Components</li>
                </div>
                <div className="row">
                    <li className="li-1">Material UI</li>
                    <li>Responsive Web Design</li>
                </div>
                <div className="row">
                    <li className="li-1">NodeJs</li>
                    <li>Express</li>
                </div>
                <div className="row">
                    <li className="li-1">SQL</li>
                    <li>Git</li>
                </div>
                <div className="row">
                    <li className="li-1">Data Structures</li>
                    <li>Algorithms</li>
                </div>
                <div className="row">
                    <li className="li-1">Trello</li>
                    <li>Soft skills</li>
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Skills;