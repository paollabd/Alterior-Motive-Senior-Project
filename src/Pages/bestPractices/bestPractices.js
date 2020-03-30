import React from "react";
import { Helmet } from 'react-helmet'
import {NavLink} from 'react-router-dom';
import "./bestPractices.css"
const TITLE = 'Ulterior Motive | Best Practices'

const BestPractices = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
            <NavLink to="/bestpractices/alttext">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Alternative Text</h2>  
                    </div>
                </div>
            </NavLink>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Color Contrast</h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Headings</h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Labels</h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Title Element</h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Color Palettes</h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>TAB Key</h2>  
                    </div>
                </div>
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Fonts</h2>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestPractices;