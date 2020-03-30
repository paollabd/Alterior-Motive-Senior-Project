import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  Alternative Text'

const AltText = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Alternative Text</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>How to write good alternative text?</h2>
                        <ul>
                            <li>Be accurate and equivalent</li>
                            <li>Be succinct</li>
                            <li>Don’t be redundant</li>
                            <li>Don’t use phrases such as “image of (...)” or “graphic of (...)”</li>
                        </ul>
                        <h2>When is Alt Text not needed?</h2>
                        <ul>
                            <li>When an image is purely decorative</li>
                            <li>If the information provided by the image is 
                            communicated effectively elsewhere in the body text of the page</li>
                        </ul>
                        <h2>Examples:</h2>
                        <div className="examples">
                            <img src={Pancakes} alt="Stack of blueberry pancakes with powdered sugar"/>
                            <div className="examples-text">
                                <h3>Great:</h3>
                                <p>alt="Stack of blueberry pancakes with powdered sugar</p>
                                <h3>Acceptable:</h3>
                                <p>alt="pancakes"</p>
                                <h3>Bad:</h3>
                                <p>alt="food" or alt="pancakes"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AltText;