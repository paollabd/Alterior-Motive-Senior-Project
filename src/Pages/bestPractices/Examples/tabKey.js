import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  TAB Key'

const TabKey = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>TAB Key</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>How can the TAB key assist you in coding accessible websites?</h2>
                        <ul>
                            <li>If you want to make sure your website can be easily navigated but you don't want to test your code with a screen reader with every change you make, use the TAB key on your keyboard!</li>
                            <li>The screen reader will go through your website content in the same order the TAB key does</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabKey;