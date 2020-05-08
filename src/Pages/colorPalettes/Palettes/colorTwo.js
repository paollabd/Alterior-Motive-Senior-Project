import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorTwo = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#1A2634' }}><h3 className="hex-code">#1A2634</h3></div>
                        <div className="color2" style={{ backgroundColor: '#213F5E' }}><h3 className="hex-code">#213F5E</h3></div>
                        <div className="color3" style={{ backgroundColor: '#FECB2F' }}><h3 className="hex-code">#FECB2F</h3></div>
                        <div className="color4" style={{ backgroundColor: '#FEE1B4' }}><h3 className="hex-code">#FEE1B4</h3></div>
                        <h2>Color Palette Example | Hover over boxes for contrast change</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#222232' }}></div>
                        <div className="color2" style={{ backgroundColor: '#323258' }}></div> 
                        <div className="color3" style={{ backgroundColor: '#eae971' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f2f2c0' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#1c2232' }}></div>
                        <div className="color2" style={{ backgroundColor: '#26385c' }}></div>
                        <div className="color3" style={{ backgroundColor: '#f6de58' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f9ebbb' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#1c1c32' }}></div>
                        <div className="color2" style={{ backgroundColor: '#2e2e56' }}></div>
                        <div className="color3" style={{ backgroundColor: '#edf07c' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f4f6c3' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#1c2232' }}></div>
                        <div className="color2" style={{ backgroundColor: '#2a385a' }}></div>
                        <div className="color3" style={{ backgroundColor: '#f5da5d' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f9e9bb' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#1C2E2E' }}></div>
                        <div className="color2" style={{ backgroundColor: '#265151' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FB9297' }}></div>
                        <div className="color4" style={{ backgroundColor: '#FCCBCD' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#1C2A32' }}></div>
                        <div className="color2" style={{ backgroundColor: '#264958' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FBB26D' }}></div>
                        <div className="color4" style={{ backgroundColor: '#FCD7C0' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#262626' }}></div>
                        <div className="color2" style={{ backgroundColor: '#3D3D3D' }}></div>
                        <div className="color3" style={{ backgroundColor: '#D2D2D2' }}></div>
                        <div className="color4" style={{ backgroundColor: '#E6E6E6' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#22262E' }}></div>
                        <div className="color2" style={{ backgroundColor: '#35404D' }}></div>
                        <div className="color3" style={{ backgroundColor: '#E7CEA5' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F1E4D2' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorTwo;