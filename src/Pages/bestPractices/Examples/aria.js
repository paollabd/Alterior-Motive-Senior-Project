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
                            <h1>ARIA</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>What is ARIA?</h2>
                        <ul>
                            <li>ARIA is shorthand for Accessible Rich Internet Applications.</li>
                            <li>ARIA is a set of attributes you can add to HTML elements that define ways to make web content and applications accessible to users with disabilities who use assistive technologies (AT).</li>
                        </ul>
                        <h2>Important Features</h2>
                        <ul>
                            <li>Labels</li>
                            <li>Landmarks</li>
                        </ul>
                        <h2>Labels</h2>
                        <ul>
                            <li>If you have a button or a form on your page, you should use a label do indicate what that button or form  does. Again, this is very helpful for users who rely on screen readers</li>
                            <li>ARIA labels are the best way to add accessible labels and descriptions. It overrides any other native labeling mechanism, such as the HTML label element</li>
                            <li>Elements can be given the attribute aria-label to provide an accessible name for situations when there is no visible label due to a chosen design approach or layout but the context and visual appearance of the control make its purpose clear.</li>
                            <li>Elements can be given the attribute aria-label to provide an accessible name when the native HTML labeling element is not supported by the control</li>
                            <li>Example: {"<button aria-label='Close' onclick='myDialog.close()'>X</button>"}</li>
                        </ul>
                        <h2>Landmarks</h2>
                        <ul>
                            <li>Landmark roles identify each section of content within a page.</li>
                            <li>Commonly used examples include: “banner”, “contentinfo”, “form”, “main”, “navigation”, “search” (i.e. role=“search”).</li>
                        </ul>
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA</a></li>
                            <li><a href="https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility">https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aria;