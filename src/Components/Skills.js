import React, { Component } from 'react';
import  './skills.css';

export default class Skills extends Component {
    render() {
        return (
            <section className="skills" id="skills">
                <div className="container">
                    <div className="section-heading">
                        <h1>Skills</h1>
                        <h5>that include</h5>
                    </div>
                    <div className="my-skills">
                        <div className="skill">
                            <div className="icon-container">
                            <i class="fa fa-object-ungroup"></i>
                            </div>
                            <h1>front End Languages</h1>
                            <p>Html, CSS, JavaScript and Styled-Components</p>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                                <i class="fa fa-code"></i>
                            </div>
                            <h1>Frameworks</h1>
                            <p>React JS, Express JS and Boostrtrap</p>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                            <i class="fa fa-node"></i>
                            </div>
                            <h1>Server side Languages</h1>
                            <p>Node js</p>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                                <i class="fa fa-code"></i>
                            </div>
                            <h1>Version control</h1>
                            <p>gitHub</p>
                        </div>
                        <div className="skill">
                            <div className="icon-container">
                                <i class="fa fa-code"></i>
                            </div>
                            <h1>Tools</h1>
                            <p>Visual Studio</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
