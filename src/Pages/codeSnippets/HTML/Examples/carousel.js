import React from "react";
import { Helmet } from 'react-helmet'
import Highlight from 'react-highlight'
import "./../style.css"
const TITLE = 'Ulterior Motive | HTML Code Snippets | Menu Example'

const Carousel = () => {
    return(
        <div className="container-html container-code-snippet">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Image Slider</h2>  
                    </div>
                </div>

                <div className="container-item-topic">
                    <h2>What makes an image slider accessible?</h2>
                    <ul>
                        <li>Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.</li>
                        <li>All functionality, including navigating between carousel items, must be operable by keyboard.</li>
                        <li>Changes to carousel items must be communicated to all users, including screen reader users.</li>
                        <li>The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.</li>
                    </ul>
                    <h2>HTML</h2>
                    <div className="code-block">
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

                
                <h2>CSS</h2>
                <div className="code-block">
                    <Highlight className='html'>
                    {"* { font-size: inherit; font-family: inherit; margin: 0; }"}<br/>
                    {""}<br/>
                    {"html { font-size: 120%; font-family: sans-serif; margin: 1rem; }"}<br/>
                    {""}<br/>
                    {".vh { position: absolute !important; clip: rect(1px, 1px, 1px, 1px); padding:0 !important; border:0 !important; height: 1px !important; width: 1px !important; overflow: hidden; }"}<br/>
                    {""}<br/>
                    {"[data-menu-component] { position: relative; display: inline-block; }"}<br/>
                    {""}<br/>
                    {"label { display: inline-block; }"}<br/>
                    {""}<br/>
                    {"[role='menu'] ul { list-style: none; margin: 0; padding: 0; }"}<br/>
                    {""}<br/>
                    {"[data-opens-menu], [role='menu'] a { line-height: 1; text-align: left; background: black; border: 0; color: #fff; padding: 0.33rem 0.5rem; text-decoration: none; }"}<br/>
                    {""}<br/>
                    {"[type='checkbox']:focus + [data-opens-menu], [role='menu'] a:focus { outline: none; background: darkBlue; }"}<br/>
                    {""}<br/>
                    {":checked + label .expanded-text { display: inline; }"}<br/>
                    {""}<br/>
                    {":checked + label .collapsed-text { display: none; }"}<br/>
                    {""}<br/>
                    {"[type='checkbox']:not(:checked) + label .expanded-text { display: none; }"}<br/>
                    {""}<br/>
                    {"[type='checkbox']:not(:checked) + label .collapsed-text { display: inline;}"}<br/>
                    {""}<br/>
                    {"[role='menu'] { position: absolute; left: 0; display: none; }"}<br/>
                    {""}<br/>
                    {":checked ~ [role='menu'] { display: block; }"}<br/>
                    {""}<br/>
                    {"[data-menu-origin='right'] { left: auto; right: 0; }"}<br/>
                    {""}<br/>
                    {"[role='menu'] a { display: block; min-width: 100%; margin-top: 0.125rem; white-space: nowrap; }"}<br/>
                    {""}<br/>
                </Highlight>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Carousel;