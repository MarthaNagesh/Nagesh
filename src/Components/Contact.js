import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-heading">
                        <h1>Contact</h1>
                    </div>
                    <form action="">
                        <label for="name">Name : </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name.." required />
                        <label for="email">Email : </label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email.." required />
                        <label for="subject">Subject : </label>
                        <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </section>
        )
    }
}
