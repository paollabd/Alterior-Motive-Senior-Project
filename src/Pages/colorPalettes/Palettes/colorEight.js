import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorEight = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1"  style={{ backgroundColor: '#65BBB6' }}><h3 className="hex-code">#65BBB6</h3></div>
                        <div className="color2"  style={{ backgroundColor: '#A3E0FE' }}><h3 className="hex-code">#A3E0FE</h3></div>
                        <div className="color3"  style={{ backgroundColor: '#AC5BCB' }}><h3 className="hex-code">#AC5BCB</h3></div>
                        <div className="color4"  style={{ backgroundColor: '#4A3E83' }}><h3 className="hex-code">#4A3E83</h3></div>
                        <h2>Color Palette Example | Hover over boxes for contrast change</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#9394b7' }}></div>
                        <div className="color2" style={{ backgroundColor: '#c0c1f7' }}></div>
                        <div className="color3" style={{ backgroundColor: '#908fb8' }}></div>
                        <div className="color4" style={{ backgroundColor: '#454577' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#7aa5b6' }}></div>
                        <div className="color2" style={{ backgroundColor: '#b0cefb' }}></div>
                        <div className="color3" style={{ backgroundColor: '#a17ec2' }}></div>
                        <div className="color4" style={{ backgroundColor: '#49427d' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#8d86b8' }}></div>
                        <div className="color2" style={{ backgroundColor: '#bdb8f6' }}></div>
                        <div className="color3" style={{ backgroundColor: '#949ab3' }}></div>
                        <div className="color4" style={{ backgroundColor: '#474773' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#7daab6' }}></div>
                        <div className="color2" style={{ backgroundColor: '#b2d2fa' }}></div>
                        <div className="color3" style={{ backgroundColor: '#9f77c0' }}></div>
                        <div className="color4" style={{ backgroundColor: '#47427c' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#6cb9b9' }}></div>
                        <div className="color2" style={{ backgroundColor: '#a7f2f0' }}></div>
                        <div className="color3" style={{ backgroundColor: '#a9a7a3' }}></div>
                        <div className="color4" style={{ backgroundColor: '#496c69' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#69bab7' }}></div>
                        <div className="color2" style={{ backgroundColor: '#a6e9f9' }}></div>
                        <div className="color3" style={{ backgroundColor: '#aa85bc' }}></div>
                        <div className="color4" style={{ backgroundColor: '#49567a' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#a7a7a7' }}></div>
                        <div className="color2" style={{ backgroundColor: '#d4d4d4' }}></div>
                        <div className="color3" style={{ backgroundColor: '#898989' }}></div>
                        <div className="color4" style={{ backgroundColor: '#4d4d4d' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#8db0ae' }}></div>
                        <div className="color2" style={{ backgroundColor: '#c0dae8' }}></div>
                        <div className="color3" style={{ backgroundColor: '#9b77ab' }}></div>
                        <div className="color4" style={{ backgroundColor: '#4b476a' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorEight;