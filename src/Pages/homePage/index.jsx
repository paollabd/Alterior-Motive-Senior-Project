import React from "react";
import './style.css';
import { Helmet } from 'react-helmet'

// Images
import Logo from '../../logo-color.PNG'
import Web from '../../webpage.png'

const TITLE = 'Ulterior Motive | Home Page'

const MainPage = () => {
    return(
        <div>
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
                <p className="highlight">Color Palettes, Best Practices, Code Snippets &#38; More</p>
                <p className="highlight">Copy &#38; Paste whatever you need!</p>
            </div>
        </div>
    );
}

export default MainPage;