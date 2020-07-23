import React, { Component } from 'react';
import  './skills.css';

export default class Skills extends Component {
    render() {
        return (
            <section className="skills" id="skills">
                <div className="container">
                    <div className="section-heading">
                        <h1>Skills</h1>
                    </div>
                    <div className="my-skills">
                        <div className="skill">
                            <div className="icon-container">
                            <i class="fab fa-react"></i>
                            </div>
                            <h1>React</h1>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                            <i class="fab fa-js-square"></i>
                            </div>
                            <h1>JavaScript</h1>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                            <i class="fas fa-code"></i>
                            </div>
                            <h1>HTML</h1>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                            <i class="fab fa-css3-alt"></i>
                            </div>
                            <h1>CSS</h1>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                                <i class="fab fa-github"></i>
                            </div>
                            <h1>GitHub</h1>
                        </div>
                    </div>
                    <div className="section-footer">
                        <h5>Also include: <strong>Bootstrap, nodeJS, Express, Visual Studio and Styled-Components</strong></h5>
                    </div>
                </div>
            </section>
        )
    }
}
