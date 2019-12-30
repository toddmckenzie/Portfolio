import React, { useEffect, useState } from 'react';
import './contact.css';
import code from '../img/code-reg.png';


const Contact = () => {

    const [ title, setTitle ] = useState('')
    const [ i, setI ] = useState(0);

    useEffect(() => {
        const contact = ['C', 'o', 'n', 't', 'a', 'c', 't']
        setTimeout(function() {            
            if (i < contact.length+1){
                setTitle(contact.slice(0,i).join(''))
                setI(i + 1);
            }
        }, 300)
    },[title, i])

    return (
        <div className="contact" style={{backgroundImage: `url(${code})`}}>
            <h1 className="contact-title">{title}</h1>
            <div className="contact-box">
                <p className="phone">Phone: 314-605-0504</p>
                <p className="email">Email: toddmckenzie@hotmail.com</p>
                <p className="linkedin">Linkedin: <a className="social" target="_blank" href="https://www.linkedin.com/in/todd-mckenzie-0431a7141/">Checkout my Linkedin profile</a></p>
                <p className="twitter">Twitter: <a className="social" target="_blank" href="https://twitter.com/ToddMcKenzie4">Checkout my Twitter profile</a></p>
                <p className="github">Github: <a className="social" target="_blank" href="https://github.com/toddmckenzie">Checkout my Github profile</a></p>
            </div>

        </div>
    )
}

export default Contact;