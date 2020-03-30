import React from "react";
import { Helmet } from 'react-helmet'
import Highlight from 'react-highlight'
import "./../style.css"
const TITLE = 'Ulterior Motive | HTML Code Snippets | Menu Example'

const CodeSnippets = () => {
    return(
        <div className="container-html container-code-snippet">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Menu</h2>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="code-block">
                    <h2>HTML</h2>
                    <Highlight className='html'>
                    {"<!DOCTYPE html>"}<br/>
                    {"<html>"}<br/>
                    {"<head>"}<br/>
                    {"    <title>Accessible Menu Item</title>"}<br/>
                    {"    <link rel='stylesheet' href='style.css'>"}<br/>
                    {"</head>"}<br/>
                    {"<body>"}<br/>
                    {"    <div data-menu-component>"}<br/>
                    {"        <input type='checkbox' role='button' aria-haspopup='true' id='toggle' class='vh'>"}<br/>
                    {"        <label for='toggle' data-opens-menu>"}<br/>
                    {"        &#x2630; Menu"}<br/>
                    {"        <span class='vh expanded-text'>expanded</span>"}<br/>
                    {"        <span class='vh collapsed-text'>collapsed</span>"}<br/>
                    {"        </label>"}<br/>
                    {"        <div role='menu' data-menu-origin='left'>"}<br/>
                    {"        <ul>"}<br/>
                    {"        <li><a href='#'>Home</a></li>"}<br/>
                    {"        <li><a href='#'>About</a></li>"}<br/>
                    {"        <li><a href='#'>Contact</a></li>"}<br/>
                    {"        </ul>"}<br/>
                    {"        </div>"}<br/>
                    {"    </div>"}<br/>
                    {"</body>"}<br/>
                    {"</html>"}
                </Highlight>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CodeSnippets;