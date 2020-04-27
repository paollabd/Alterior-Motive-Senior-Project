import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  Title Element'

const TitleElem = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Title Element</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>Why is the title element important?</h2>
                        <ul>
                            <li>The title element is announced as soon as a web document is loaded, so it is your opportunity to provide a succinct summary of the page</li>
                            <li>If you use the same title for every webpage, to those who rely on screenreaders it might seem like they are on the same web page the whole time. The solution is very simple: change the title with every new page. See example below! </li>
                        </ul>
                        <h2>How can this be benefitial to you?</h2>
                        <ul>
                            <li>Search engines use the title of your page to bring traffic to your website. <br/> Example: If your website is about accessible web design, make sure to add those key words to the title</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleElem;