import React, { Component } from 'react';
import img from '../images/about.jpg';
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <section className="projects" id="projects">
            <div className="container">
                <div className="section-heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-item">
                    <div className="projects-img has-margin-right">
                        <img src={img} ></img>
                    </div>
                    <div className="projects-description">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a target="_new" href="https://marthanagesh.github.io/nagesh/" className="cta">View site</a>
                    </div>
                </div>
                <div className="projects-item">
                <div className="projects-description has-margin-right">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a href="#" className="cta">View site</a>
                    </div>
                    <div className="projects-img">
                        <img src={img} ></img>
                    </div>
                    
                </div>
                <div className="projects-item">
                    <div className="projects-img has-margin-right">
                        <img src={img} ></img>
                    </div>
                    <div className="projects-description">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a href="#" className="cta">View site</a>
                    </div>
                </div>
                <div className="projects-item">
                <div className="projects-description has-margin-right">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries, but also the leap 
                           into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a href="#" className="cta">View site</a>
                    </div>
                    <div className="projects-img">
                        <img src={img} ></img>
                    </div>
                    
                </div>
            </div>
            </section>
        )
    }
}
