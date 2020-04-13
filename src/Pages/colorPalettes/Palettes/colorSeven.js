import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorSeven = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#4A2775' }}><h3 className="hex-code">#4A2775</h3></div>
                        <div className="color2" style={{ backgroundColor: '#61549D' }}><h3 className="hex-code">#61549D</h3></div>
                        <div className="color3" style={{ backgroundColor: '#B96DDC' }}><h3 className="hex-code">#B96DDC</h3></div>
                        <div className="color4" style={{ backgroundColor: '#F3E876' }}><h3 className="hex-code">#F3E876</h3></div>
                        <h2>Color Palette Example</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3d3d69' }}></div>
                        <div className="color2" style={{ backgroundColor: '#5c5c90' }}></div>
                        <div className="color3" style={{ backgroundColor: '#9e9dc8' }}></div>
                        <div className="color4" style={{ backgroundColor: '#eeee9c' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#45356e' }}></div>
                        <div className="color2" style={{ backgroundColor: '#5f5896' }}></div>
                        <div className="color3" style={{ backgroundColor: '#ae8cd2' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f1ec8b' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#404265' }}></div>
                        <div className="color2" style={{ backgroundColor: '#5d5d8c' }}></div>
                        <div className="color3" style={{ backgroundColor: '#a2a7c3' }}></div>
                        <div className="color4" style={{ backgroundColor: '#eff0a3' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#42385d' }}></div>
                        <div className="color2" style={{ backgroundColor: '#5f5895' }}></div>
                        <div className="color3" style={{ backgroundColor: '#ad86d1' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f1eb8e' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#495d5a' }}></div>
                        <div className="color2" style={{ backgroundColor: '#608481' }}></div>
                        <div className="color3" style={{ backgroundColor: '#b6b6b2' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f2b3b8' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#49476c' }}></div>
                        <div className="color2" style={{ backgroundColor: '#606E93' }}></div>
                        <div className="color3" style={{ backgroundColor: '#b795cd' }}></div>
                        <div className="color4" style={{ backgroundColor: '#f3d194' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#404040' }}></div>
                        <div className="color2" style={{ backgroundColor: '#636363' }}></div>
                        <div className="color3" style={{ backgroundColor: '#999999' }}></div>
                        <div className="color4" style={{ backgroundColor: '#e2e2e2' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#45385d' }}></div>
                        <div className="color2" style={{ backgroundColor: '#625d82' }}></div>
                        <div className="color3" style={{ backgroundColor: '#a887bb' }}></div>
                        <div className="color4" style={{ backgroundColor: '#eae5bb' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorSeven;