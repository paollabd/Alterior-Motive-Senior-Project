import React from "react";
import './style.css';

const Resources = () => {
    return(
        <div className="resources-page">
            <div className="resources-container">
                <div className="resources-text">
                    <h1>Resources</h1>
                    <p>List of the resources that helped me create this website.</p>
                    <h2>Best Practices</h2>
                    <ul>
                        <li><a href="https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/aria-landmarks/" target="_blank">[ARIA] https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/aria-landmarks/</a></li>
                        <li><a href="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships" target="_blank">[ARIA] https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships</a></li>
                        <li><a href="https://whocanuse.com/" target="_blank">[CONTRAST] https://whocanuse.com/</a></li>
                        <li><a href="https://webaim.org/techniques/fonts/" target="_blank">[FONTS] https://webaim.org/techniques/fonts/</a></li>
                        <li><a href="https://usability.yale.edu/web-accessibility/articles/readability" target="_blank">[HEADINGS] https://usability.yale.edu/web-accessibility/articles/readability</a></li>
                        <li><a href="https://www.microsoft.com/en-us/research/blog/alt-text-that-informs-meeting-the-needs-of-people-who-are-blind-or-low-vision/" target="_blank">[ALT TEXT] https://www.microsoft.com/en-us/research/blog/alt-text-that-informs-meeting-the-needs-of-people-who-are-blind-or-low-vision/</a></li>
                    </ul>
                    <h2>Code Snippets</h2>
                    <ul>
                        <li><a href="https://webaim.org/techniques/forms/controls" target="_blank">[FORMS] https://webaim.org/techniques/forms/controls</a></li>
                        <li><a href="https://www.w3.org/WAI/tutorials/carousels/" target="_blank">[IMAGE SLIDER] https://www.w3.org/WAI/tutorials/carousels/</a></li>
                        <li><a href="https://codepen.io/heydon/pen/xPWOLp" target="_blank">[IMAGE SLIDER] https://codepen.io/heydon/pen/xPWOLp</a></li>
                        <li><a href="https://www.w3schools.com/howto/howto_js_topnav.asp" target="_blank">[MENU] https://www.w3schools.com/howto/howto_js_topnav.asp</a></li>
                        <li><a href="https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe" target="_blank">[MENU] https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe</a></li>
                        <li><a href="https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/" target="_blank">[MENU] https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/</a></li>
                    </ul>
                    <h2>Color Palettes</h2>
                    <ul>
                        <li><a href="https://blog.graphiq.com/finding-the-right-color-palettes-for-data-visualizations-fcd4e707a283" target="_blank">[COLOR PALETTES] https://blog.graphiq.com/finding-the-right-color-palettes-for-data-visualizations-fcd4e707a283</a></li>
                        <li><a href="https://medium.com/@chrisquinnr/nocoffee-the-vision-impairment-simulator-you-should-be-using-f81992c1effc" target="_blank">[NO COFFEE] https://medium.com/@chrisquinnr/nocoffee-the-vision-impairment-simulator-you-should-be-using-f81992c1effc</a></li>
                    </ul>
                    <h2>Motivation</h2>
                    <ul>
                        <li><a href="https://webaim.org/projects/million/" target="_blank">[WebAIM] https://webaim.org/projects/million/</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resources;