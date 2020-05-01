import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import AppleNav from '../../../appleNavBar.PNG'
import Contrast from '../../../colorContrast.PNG'
import Whocanuse from '../../../whocanuse3.PNG'
import Whocanuse2 from '../../../whocanuse2.PNG'
const TITLE = 'Ulterior Motive |  Color Contrast'

const ColorContrast = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Color Contrast</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>Why worry about color contrast?</h2>
                        <ul>
                            <li>Accessibility can be severely reduced for people with visual impairments by using low contrast color combinations.</li>
                            <li>By using grey on grey, for example, the text becomes nearly impossible to read. Nevertheless, this grey color scheme is commonly used</li>
                        </ul>
                        <h2>Helpful Resources:</h2>
                        <ul>
                            <li>The website listed below allows you to check the contrast between two colors. It gives you detailed information on the types of visual impariments that your chosen colors are accessible for.</li>
                            <li><a href="https://whocanuse.com/" target="_blank">whocanuse.com</a></li>
                        </ul>
                        <h2>Bad Example:</h2>
                        <ul>
                            <li>Below, we have a dark grey text on top of a darker grey background. This is a common combination websites use in their navigation bars.</li>
                            <li>On some websites, like apple.com, once you click on a nav bar item, the item you are currently on is darkened.</li>
                            <li>If the nav bar has a dark text on top of a dark background, as shown on the image below, this text can be difficult to read.</li>
                        </ul>
                        <img className="colorContrast" src={Contrast} alt="White text on top if light grey background"/>
                        <img className="colorContrastExample" src={AppleNav} alt="apple.com Navigation Bar"/>
                        <ul>
                            <li>By running these two colors by the whocanuse.com contrast checker, we can see who this color combination is accessible for.</li>
                            <li>At first glance, it might seem as if this color combination is pretty accebible; However, as you scroll down, you learn that people with Cataracts (33% of the population), as well as people with Low Vision (31% of the population), will not be able to distinguish these two colors very well. That is a large audience who will end up struggling to navigate the website.</li>
                        </ul>
                        <img className="colorContrastResults" src={Whocanuse} alt="Good results from contrast check"/>
                        <img className="colorContrastResults" src={Whocanuse2} alt="Bad results from contrast check"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorContrast;