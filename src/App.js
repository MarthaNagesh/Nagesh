import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Skills from './Components/Skills';



export default class App extends Component {
  state= {
    Open: false  
  };
 contentClickHandler = ()=> {
  this.setState((prevState)=>{
    return {Open: !prevState.Open};
  });
 };
 contentCloser = ()=>{
   this.setState({Open: false});
 };
  render() {
    return (
      <div>
        <Homepage show={this.state.Open} changeClass={this.contentClickHandler}/>
        <About />
        <Skills />
      </div>
    )
  }
}

