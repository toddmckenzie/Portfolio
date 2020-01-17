import React from 'react';
import './App.css';
import About from './components/about';
import Header from './components/header';
import Skills from './components/skills';
import Contact from './components/contact';
import Projects from './components/projects';
import Home from './components/home';
import { Route } from 'react-router-dom';


function App() {
  return (
        <div class="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </div>
  );
}

export default App;
