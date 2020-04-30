import React, { useEffect } from 'react';
import img from '../images/about.jpg';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const About =()=>{
        useEffect(()=>{
            Aos.init({duration:2000});
        }, []);
        return (
            <section className="about" id="about">
                <div className="container">
                    <div data-aos="fade-up" className="profile-img">
                        <img className="about-img" src={img} alt=" "/>
                    </div>
                    <div data-aos="fade-down" className="about-details">
                        <div className="about-heading">
                            <h1>About</h1>
                            <h5>Myself</h5>
                        </div>
                        <p>
                        "I am a <cite>Software Developer</cite> with over 5 years of experience in developing User Interface (UI)
                         web applications using front End/user Interface technologies like JavaScript, React JS, Bootstrap 
                         and CSS."
                        </p>
                        <div className="social-media">
                            <ul className="nav-list">
                                <li><a href="#" className="icon-link"><i class="fa fa-github"></i></a></li>
                                <li><a href="#" className="icon-link"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#" className="icon-link"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

            </section>
        )
}

export default About;
