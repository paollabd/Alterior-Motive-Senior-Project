import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorThree = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#2F90B2' }}><h3 className="hex-code">#2F90B2</h3></div>
                        <div className="color2" style={{ backgroundColor: '#20566E' }}><h3 className="hex-code">#20566E</h3></div>
                        <div className="color3" style={{ backgroundColor: '#EFDDB4' }}><h3 className="hex-code">#EFDDB4</h3></div>
                        <div className="color4" style={{ backgroundColor: '#F73920' }}><h3 className="hex-code">#F73920</h3></div>
                        <h2>Color Palette Example</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#61629D' }}></div>
                        <div className="color2" style={{ backgroundColor: '#404068' }}></div>
                        <div className="color3" style={{ backgroundColor: '#E8E7C0' }}></div>
                        <div className="color4" style={{ backgroundColor: '#C2C032' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#517CAD' }}></div>
                        <div className="color2" style={{ backgroundColor: '#324B6A' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FBFCBA' }}></div>
                        <div className="color4" style={{ backgroundColor: '#E8A56A' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#645DA8' }}></div>
                        <div className="color2" style={{ backgroundColor: '#3D3868' }}></div>
                        <div className="color3" style={{ backgroundColor: '#DFEAC3' }}></div>
                        <div className="color4" style={{ backgroundColor: '#CAD332' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#4f80ae' }}></div>
                        <div className="color2" style={{ backgroundColor: '#324D6A' }}></div>
                        <div className="color3" style={{ backgroundColor: '#ECE2BC' }}></div>
                        <div className="color4" style={{ backgroundColor: '#DF8E2E' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3DA3A1' }}></div>
                        <div className="color2" style={{ backgroundColor: '#266563' }}></div>
                        <div className="color3" style={{ backgroundColor: '#EEC8CA' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F03535' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3B99AC' }}></div>
                        <div className="color2" style={{ backgroundColor: '#265D69' }}></div>
                        <div className="color3" style={{ backgroundColor: '#EED3BE' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F13832' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#828282' }}></div>
                        <div className="color2" style={{ backgroundColor: '#4F4F4F' }}></div>
                        <div className="color3" style={{ backgroundColor: '#DFDFDF' }}></div>
                        <div className="color4" style={{ backgroundColor: '#959595' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#69899A' }}></div>
                        <div className="color2" style={{ backgroundColor: '#40535F' }}></div>
                        <div className="color3" style={{ backgroundColor: '#E6DECD' }}></div>
                        <div className="color4" style={{ backgroundColor: '#C87675' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorThree;