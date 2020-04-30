import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


export default class App extends Component {
  state= {
    Open: false  
  };
 contentClickHandler = ()=> {
  this.setState((prevState)=>{
    return {Open: !prevState.Open};
  });
 };
 
 
  render() {
    return (
      <div>
        <Homepage show={this.state.Open} 
          changeClass={this.contentClickHandler}  />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

