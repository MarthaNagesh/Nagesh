import React, { useEffect } from 'react';
import img from '../images/about.jpg';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
        return (
            <section className="projects" id="projects">
            <div className="container">
                <div className="section-heading">
                    <h1>Projects</h1>
                </div>
                <div className="projects-item">
                    <div data-aos="fade-up" className="projects-img has-margin-right">
                        <img src={img} ></img>
                    </div>
                    <div data-aos="fade-down" className="projects-description">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. 
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a target="_new" href="https://marthanagesh.github.io/nagesh/" className="cta">View site</a>
                    </div>
                </div>
                <div className="projects-item">
                <div data-aos="fade-down"className="projects-description has-margin-right">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a href="#" className="cta">View site</a>
                    </div>
                    <div data-aos="fade-up" className="projects-img">
                        <img src={img} ></img>
                    </div>
                    
                </div>
                <div className="projects-item">
                    <div data-aos="fade-up" className="projects-img has-margin-right">
                        <img src={img} ></img>
                    </div>
                    <div data-aos="fade-down" className="projects-description">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a href="#" className="cta">View site</a>
                    </div>
                </div>
                <div className="projects-item">
                <div data-aos="fade-down" className="projects-description has-margin-right">
                        <h1>Shopping-Cart</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.
                        </p>
                        <a href="#" className="cta">View code</a>
                        <a href="#" className="cta">View site</a>
                    </div>
                    <div data-aos="fade-up" className="projects-img">
                        <img src={img} ></img>
                    </div>
                    
                </div>
            </div>
            </section>
        )
}

export default Projects;