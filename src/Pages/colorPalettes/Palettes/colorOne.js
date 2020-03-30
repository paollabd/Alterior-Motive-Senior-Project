import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorOne = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1"><h3 className="hex-code">#064380</h3></div>
                        <div className="color2"><h3 className="hex-code">#208FED</h3></div>
                        <div className="color3"><h3 className="hex-code">#FBFEA8</h3></div>
                        <div className="color4"><h3 className="hex-code">#FD4E6B</h3></div>
                        <h2>Color Palette Example</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#2E2E73' }}></div>
                        <div className="color2" style={{ backgroundColor: '#6868D8' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FCFCC4' }}></div>
                        <div className="color4" style={{ backgroundColor: '#C9C768' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#223878' }}></div>
                        <div className="color2" style={{ backgroundColor: '#4B7AE1' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FBFCBA' }}></div>
                        <div className="color4" style={{ backgroundColor: '#E8A56A' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#2A2671' }}></div>
                        <div className="color2" style={{ backgroundColor: '#625AD5' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FCFBCA' }}></div>
                        <div className="color4" style={{ backgroundColor: '#D1DA66' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#223D78' }}></div>
                        <div className="color2" style={{ backgroundColor: '#4D80E0' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FBFCBB' }}></div>
                        <div className="color4" style={{ backgroundColor: '#E6976A' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#166A68' }}></div>
                        <div className="color2" style={{ backgroundColor: '#35CAC6' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FBD5D8' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F66362' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#0D5876' }}></div>
                        <div className="color2" style={{ backgroundColor: '#32AFDD' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FBEBBF' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F85A69' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#454545' }}></div>
                        <div className="color2" style={{ backgroundColor: '#8D8D8D' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F5F5F5' }}></div>
                        <div className="color4" style={{ backgroundColor: '#A0A0A0' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#354563' }}></div>
                        <div className="color2" style={{ backgroundColor: '#6E8FBE' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F8F9D8' }}></div>
                        <div className="color4" style={{ backgroundColor: '#D0848C' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorOne;