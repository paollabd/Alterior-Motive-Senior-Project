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
                        <h2>Menu</h2>  
                    </div>
                    <h1>React</h1>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Forms</h2>  
                    </div>
                    <h1>React</h1>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Buttons</h2>  
                    </div>
                    <h1>React</h1>
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