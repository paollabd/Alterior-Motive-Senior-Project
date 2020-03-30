import React from "react";
import { Helmet } from 'react-helmet';
import {NavLink} from 'react-router-dom';
import "./style.css"

const TITLE = 'Ulterior Motive | HTML Code Snippets'

const CodeSnippets = () => {
    return(
        <div className="container-html">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <NavLink to="/codesnippets/html/menu">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Menu</h2>  
                    </div>
                    <h1>HTML</h1>
                </div>
                </NavLink>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Forms</h2>  
                    </div>
                    <h1>HTML</h1>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Buttons</h2>  
                    </div>
                    <h1>HTML</h1>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2></h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2></h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2></h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2></h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2></h2>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodeSnippets;