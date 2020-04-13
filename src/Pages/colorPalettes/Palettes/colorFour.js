import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorFour = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#303D4F' }}><h3 className="hex-code">#303D4F</h3></div>
                        <div className="color2" style={{ backgroundColor: '#517085' }}><h3 className="hex-code">#517085</h3></div>
                        <div className="color3" style={{ backgroundColor: '#FAAF4C' }}><h3 className="hex-code">#FAAF4C</h3></div>
                        <div className="color4" style={{ backgroundColor: '#DC7043' }}><h3 className="hex-code">#DC7043</h3></div>
                        <h2>Color Palette Example</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#35354b' }}></div>
                        <div className="color2" style={{ backgroundColor: '#606080' }}></div>
                        <div className="color3" style={{ backgroundColor: '#dedd6e' }}></div>
                        <div className="color4" style={{ backgroundColor: '#b7b651' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#32384d' }}></div>
                        <div className="color2" style={{ backgroundColor: '#586882' }}></div>
                        <div className="color3" style={{ backgroundColor: '#eecc60' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ce9f4b' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#35354b' }}></div>
                        <div className="color2" style={{ backgroundColor: '#5f5c7f' }}></div>
                        <div className="color3" style={{ backgroundColor: '#e2e776' }}></div>
                        <div className="color4" style={{ backgroundColor: '#bdc453' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#323b4d' }}></div>
                        <div className="color2" style={{ backgroundColor: '#586982' }}></div>
                        <div className="color3" style={{ backgroundColor: '#eec662' }}></div>
                        <div className="color4" style={{ backgroundColor: '#cc964b' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#324747' }}></div>
                        <div className="color2" style={{ backgroundColor: '#537d7c' }}></div>
                        <div className="color3" style={{ backgroundColor: '#f78387' }}></div>
                        <div className="color4" style={{ backgroundColor: '#d85a5c' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#32424b' }}></div>
                        <div className="color2" style={{ backgroundColor: '#537681' }}></div>
                        <div className="color3" style={{ backgroundColor: '#f89c68' }}></div>
                        <div className="color4" style={{ backgroundColor: '#da664d' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3d3d3d' }}></div>
                        <div className="color2" style={{ backgroundColor: '#6a6a6a' }}></div>
                        <div className="color3" style={{ backgroundColor: '#c3c3c3' }}></div>
                        <div className="color4" style={{ backgroundColor: '#989898' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#383d45' }}></div>
                        <div className="color2" style={{ backgroundColor: '#606d78' }}></div>
                        <div className="color3" style={{ backgroundColor: '#debb9b' }}></div>
                        <div className="color4" style={{ backgroundColor: '#bb887a' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorFour;