import React from "react";
import './style.css';
import { Helmet } from 'react-helmet';
import {NavLink} from 'react-router-dom';

// Images
import Logo from '../../new-logo.png'
import Web from '../../webpage.png'

const TITLE = 'Ulterior Motive | Home Page'

const MainPage = () => {
    return(
        <div className="homePage">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            {/* <img src={Logo} alt="ulterior motive Logo" className="logo"/> */}
            {/* <div className="center">
                <img src={Web} alt="cartoon-style image of a webpage"/>
                <p className="highlight"> “The power of the Web is in its universality.</p>
                <p className="highlight"> “Access by everyone regardless of disability is</p>
                <p className="highlight"> an essential aspect.” – Tim Berners-Lee</p>
            </div> */}
            <div className="title-container">
                <h1 className="title">Alterior Motive</h1>
                <p className="highlight">Accessible Coding References for Designers and Developers</p>
            </div>
            <div className="lower-nav-bar">
                <div className="lower-nav-bar-item">About Us</div>
                <div className="lower-nav-bar-item">Place Holder</div>
                <div className="lower-nav-bar-item">Resources</div>
                <a href="https://github.com/paollabd/Alterior-Motive-Senior-Project" target="_blank"><div className="lower-nav-bar-item">GitHub</div></a>
            </div>
        </div>
    );
}

export default MainPage;