import React from 'react';
import './App.css';
import About from './components/about';
import Header from './components/header';
import Skills from './components/skills';
import Contact from './components/contact';
import Projects from './components/projects';


import { Route } from 'react-router-dom';


function App() {
  return (
        <div class="container">
        <Header />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        </div>
  );
}

export default App;
