import React, { Component } from 'react';
import './Home-page.css';


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
        <header>
            <div className={menuTogglerClasses.join(' ')} onClick= {props.changeClass}>
                <div className={startbarClasses.join(' ')}></div>
                <div className="bar"></div>
                <div className={endbarClasses.join(' ')}></div>
            </div>
        <nav className={navClasses.join(' ')}>
            <ul className="nav-list" onClick = {props.changeClass}>
                <li><a href="#" className="nav-link">about</a></li> 
                <li><a href="#" className="nav-link">skills</a></li>
                <li><a href="#" className="nav-link">projects</a></li>
                <li><a href="#" className="nav-link">contact</a></li>
            </ul>
        </nav>
        <div className="landing-text">
            <h1><strong>Nagesh Martha</strong></h1>
            <h5>Front End React Developer</h5>
        </div>
        </header>
    )

}
export default Homepage;


