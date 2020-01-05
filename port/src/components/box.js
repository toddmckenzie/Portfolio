import React from 'react';


const Box = (props) => {
    console.log(props.identity === 'About')
    return (
        <div className="half">
            <div className="circle">
                {props.identity === 'About' ? 
                <div className="about-circle">
                    <p className="ach">About Me</p>
                </div> : null }
                { props.identity === 'Contact' ? 
                <div className="contact-circle">
                    <p className="ach">Contact</p>
                </div> : null }
                { props.identity === 'Home' ? 
                <div className="home-circle">
                    <p className="ach">Home</p>
                </div> : null }
            </div>
        </div>
    )
}

export default Box;

