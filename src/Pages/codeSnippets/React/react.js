import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"

const TITLE = 'Ulterior Motive | React.js Code Snippets'

const CodeSnippets = () => {
    const codeHTML = '';
    return(
        <div className="container-html">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
            <div className="container-item">
                    <div className="container-item-center">
                        <h2>In Progress</h2>  
                    </div>
                    <h1>React</h1>
                </div>
            </div>
        </div>
    );
}

export default CodeSnippets;