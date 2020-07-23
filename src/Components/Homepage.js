import React, { Component } from 'react';
import './Home-page.css';
import { Link , animateScroll as scroll } from 'react-scroll';


const Homepage = props =>{
    let menuTogglerClasses = ['menu-toggler'];
    let navClasses = ['top-nav'];
    let startbarClasses = ['bar half start'];
    let endbarClasses = ['bar half end'];
    if(props.show){
        menuTogglerClasses.push('open');
        navClasses.push('open');
        startbarClasses.unshift('open');
        endbarClasses.unshift('open');
    }
    return (
        <header id="top">
            <div className={menuTogglerClasses.join(' ')} onClick= {props.changeClass}>
                <div className={startbarClasses.join(' ')}></div>
                <div className="bar"></div>
                <div className={endbarClasses.join(' ')}></div>
            </div>
        <nav className={navClasses.join(' ')}>
            <ul className="nav-list" onClick = {props.contentCloser}>
                <li className="nav-link"><Link to="about"  offset={-20} smooth={true} duration={1000} onClick = {props.changeClass}>about</Link></li> 
                <li className="nav-link"><Link to="skills" offset={-100} smooth={true} duration={1000} onClick = {props.changeClass}>skills</Link></li>
                <li className="nav-link"><Link to="projects" smooth={true} duration={1000} onClick = {props.changeClass}>projetcs</Link></li>
                <li className="nav-link"><Link to="contact" smooth={true} duration={1000} onClick = {props.changeClass}>contact</Link></li>
            </ul>
        </nav>
        <div className="landing-text" id="home">
            <h1><strong>Nagesh Martha</strong></h1>
            <h5>Front End React Developer</h5>
        </div>
        </header>
    )

}
export default Homepage;


