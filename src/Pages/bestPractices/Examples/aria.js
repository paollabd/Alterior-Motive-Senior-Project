import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  Aria'

const Aria = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Labels</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>Why are labels important?</h2>
                        <ul>
                            <li>If you have a button or a form on your page, you should use a label do indicate what that button or form  does. Again, this is very helpful for users who rely on screen readers</li>
                            <li>ARIA labels are the best way to add accessible labels and descriptions. It overrides any other native labeling mechanism, such as the HTML label element</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aria;