import React from 'react';
import './skills.css';


const Skills = () => {

    return (
        <div className="skills" >
            <div className="box">
            <h1>Skills</h1>
                <ul>
                <div className="row">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Less</li>
                </div>
                <div className="row">
                    <li>Sass</li>
                    <li>ReactJs</li>
                    <li>React Native</li>
                </div>
                <div className="row">
                    <li>Redux</li>
                    <li>Styled Components</li>
                    <li>Material UI</li>
                </div>
                <div className="row">
                    <li>Responsive Web Design</li>
                    <li>NodeJs</li>
                    <li>Express</li>
                </div>
                <div className="row">
                    <li>SQL</li>
                    <li>Git</li>
                    <li>Data Structures</li>
                </div>
                <div className="row">
                    <li>Algorithms</li>
                    <li>Trello</li>
                    <li>Team Player</li>
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Skills;