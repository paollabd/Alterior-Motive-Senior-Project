import React from "react";
import { Helmet } from 'react-helmet'
import Highlight from 'react-highlight'
import "./../style.css"
const TITLE = 'Ulterior Motive | HTML Code Snippets | Button Example'

const Button = () => {
    return(
        <div className="container-html container-code-snippet">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Buttons</h2>  
                    </div>
                </div>

                <div className="container-item-topic">
                    <h2>Accessible Button</h2>
                    <ul>
                        <li>Avoid using anything other than the button tag, as it is resizable, translatable, focusable, interoperable, stylable, restylable, maintainable, mutable and simple.</li>
                        <li>Not all inclusive design solutions are this simple, but using the right HTML elements can guide you in the right direction.</li>
                        <li>If you want something more elaborate than a default HTML button, check out the code snippet below!</li>
                    </ul>
                    <h2>HTML</h2>
                    <div className="code-block">
                    <Highlight className='html'>
                    {"<!DOCTYPE html>"}<br/>
                    {"<html>"}<br/>
                    {"<head>"}<br/>
                    {"    <title>Accessible Button</title>"}<br/>
                    {"    <link rel='stylesheet' href='style.css'>"}<br/>
                    {"</head>"}<br/>
                    {"<body>"}<br/>
                    {"    <h1>ARIA Button Example</h1>"}<br/>
                    {"        <ul id='nameList'></ul>"}<br/>
                    {"        <label for='newName'>Enter your Name: </label>"}<br/>
                    {"        <input type='text' id='newName'>"}<br/>
                    {"        <span role='button' tabindex='0' onclick='handleCommand()' onKeyDown='handleCommand()'>Add Name</span>"}<br/>
                    {"</body>"}<br/>
                    {"</html>"}
                </Highlight>
                </div>              
                <h2>CSS</h2>
                <div className="code-block">
                    <Highlight className='html'>
                    {"[role='button'] {padding: 2px; background-color: navy; color: white; cursor: default;}"}<br/>
                    {""}<br/>
                    {"[role='button']:hover,"}<br/>
                    {"[role='button']:focus,"}<br/>
                    {"[role='button']:active { background-color: white; color: navy; }"}<br/>
                    {""}<br/>
                    {"ul { list-style: none; }"}<br/>
                    {""}<br/>
                </Highlight>
                </div>
                <h2>JS</h2>
                <div className="code-block">
                <Highlight className='javascript'>
                    {"function handleCommand(event) {"}<br/>
                    {"  // Handles both mouse clicks and keyboard"}<br/>
                    {"  // activate with Enter or Space"}<br/>
                    {""}<br/>
                    {"  // Get the new name value from the input element"}<br/>
                    {"  let newNameInput = document.getElementById('newName');"}<br/>
                    {"  let name = newNameInput.value;"}<br/>
                    {"  newNameInput.value = ''; // clear the text field"}<br/>
                    {"  newNameInput.focus();  // give the text field focus to enable entering and additional name."}<br/>
                    {""}<br/>
                    {"  // Don't add blank entries to the list."}<br/>
                    {"  if(name.length > 0) "}<br/>
                    {"      listItem = document.createElement('li');"}<br/>
                    {"      list.appendChild(listItem);"}<br/>
                    {"  }"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                </Highlight>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Button;