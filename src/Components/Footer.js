import React from 'react';
import './Footer.css';
import { Link , animateScroll as scroll } from 'react-scroll';

export default function Footer() {
    return (
        <footer className="copyright">
            <div className="up" id="up">
                <Link to="top" activeClass="up" smooth={true} duration={1000}><i className="fas fa-chevron-up"></i></Link>
            </div>
        </footer>
    )
}
