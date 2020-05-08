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
            <div className="title-container">
                {/* <h1 className="title">Alterior Motive</h1>
                 */}
                <img src={Logo} alt="ulterior motive" className="logo"/>
                <p className="highlight">Accessible Coding References for Designers and Developers</p>
            </div>
            <div className="lower-nav-bar">
                <NavLink to="/codesnippets/html"><div className="lower-nav-bar-item">Copy &#x26; Paste Accessible Code Snippets</div></NavLink>
                <NavLink to="/bestpractices"><div className="lower-nav-bar-item">Advice for Coding Accessible Websites</div></NavLink>
                <NavLink to="/resources"><div className="lower-nav-bar-item">Resources</div></NavLink>
                <a href="https://github.com/paollabd/Alterior-Motive-Senior-Project" target="_blank"><div className="lower-nav-bar-item">GitHub</div></a>
            </div>
        </div>
    );
}

export default MainPage;