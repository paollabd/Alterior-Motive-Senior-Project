import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  Fonts'

const Fonts = () => {
    return(
        <div className="fonts">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Fonts</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                    <h2>Font Choice: What to pay attention to?</h2>
                        <h3>The similarity between different letters:</h3>
                        <ul>
                            <li><span class="arial">Illustration (Arial)</span></li>  
                            <li><span class="verdana">Illustration (Verdana</span>)</li>
                            <li>Notice how with Arial, you can't tell the difference between an uppercase "i" and a lowercase "l".</li>
                        </ul>
                        <h3>The width of the letters/length of the sentences:</h3>
                        <ul>
                            <li><span class="arial">Notice the length of this sentence (Arial)</span></li>  
                            <li><span class="verdana">Notice the length of this sentence (Verdana)</span></li>
                            <li>Notice how the letters in verdana are wider, which tends to indicate more readability.</li>
                        </ul>
                        <h3>If a font has too many embellishments:</h3>
                        <ul>
                            <li><span class="trebuchet">It is good to be intelligent &amp; kind (Trebuchet MS)</span></li>  
                        </ul>
                        <h2>Readability</h2>
                        <ul>
                            <li>Experts do not necessarily agree on which fonts are accessible and appropriate for web use.</li>
                            <li>It is generally best to use standard fonts that are available on the end-users device.</li>
                            <li>Keep in mind that best practices here involve keeping font variations at a minimum.</li>
                            <li>Too many fonts can create a confusing layout, which is bad for all users, but especially for those with reading disorders, learning disabilities, or attention deficit disorders.</li>
                        </ul>
                        <h2>Font-Family</h2>
                        <ul>
                            <li>Because not all computers have the same fonts installed, you should specify alternative fonts those computers can use in case your preferred font is not available to them.</li>   
                            <li>This is how you do that: font-family: Helvetica, Arial, sans-serif</li>  
                        </ul>
                        <h2>Text vs. Graphics</h2>
                        <ul>
                            <li>Having content in text form is really important for accessibility.</li>
                            <li>If you have text within a graphic element, the screen reader will not be able to go through it.</li>
                            <li>Text can be transformed into sound by the screen reader and can be enlarged by magnification software.</li>
                            <li>Even though providing alternative text for graphic texts is a suitable solution to the first issue, it does not address the second one.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fonts;