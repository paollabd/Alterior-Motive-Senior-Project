import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  Headings'

const Headings = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Headings</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>Why should you use headings to organize your page?</h2>
                        <ul>
                            <li>Screen readers can benefit from the use of headings since it navigates the page according to them.</li>
                            <li>Screen readers can navigate headings allowing users to skip sections, begin at certain points or skip repeated blocks such as sidebars or menus, for example.</li>
                            <li>Users that rely on a screen reader to navigate the web can go through a website's content each heading at a time. The screen reader will go through the headings in order and if you use them correctly, you can make your website more organized and easier to navigate.</li>
                        </ul>
                        <h2>Don't use heading because of their font size</h2>
                        <ul>
                            <li>If you are using a heading because you like the font size, stop being lazy and use CSS. Headings play an important role in keeping your website structure accessible.</li>
                        </ul>
                        <h2>How should you use headings?</h2>
                        <ul>
                            <li>The h1 tag should only be used for the title of the page.</li>
                            <li>The h2 tag is for the sub-categories.</li>
                            <li>Example: If you are creating a website discussing each character on the TV show Friends, you should use h1 for the title "Friends", h2 for each character (Rachel, Monica, Phoebe, Chandler, Joey, and Ross), and h3 for categories related to each individual character such as "age", "job", etc.</li>
                            <li>P.S.: Do not overuse headings. If you need more than h3 you're probably using it too much and your website could be difficult to navigate.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Headings;