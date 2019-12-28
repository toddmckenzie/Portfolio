import React, { useState, useEffect } from 'react';
import './home.css';
import todd from '../img/todd.jpg';


const Home = () => {
    const [ name, setName ] = useState('T');
    const [ title, setTitle ] = useState('')
    const [ i, setI ] = useState(1);
    const [ j , setJ ] = useState(1)
    useEffect(() => {
        let user = ['T','o','d','d',' ','M','c','K','e','n','z','i','e']
        let job = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
        setTimeout(function() {            
            if (i < user.length+1){
                setName(user.slice(0,i).join(''))
                setI(i + 1);
            }
            if (i === user.length + 1 && j < job.length+1){
                setTitle(job.slice(0,j).join(''))
                setJ(j+1)
            }
        }, 200)
    },[i, name, title, j])

    return (
        <div className="home">
            <img src={todd} className="pic"/>
            <div>
                <h1 className="name">{name}</h1>
                <h3 className="title">{title}</h3>
            </div>
        </div>
    )
}


export default Home