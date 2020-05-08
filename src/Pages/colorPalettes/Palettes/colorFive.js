import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorFive = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3D0C59' }}><h3 className="hex-code">#3D0C59</h3></div>
                        <div className="color2" style={{ backgroundColor: '#B32062' }}><h3 className="hex-code">#B32062</h3></div>
                        <div className="color3" style={{ backgroundColor: '#74D3B5' }}><h3 className="hex-code">#74D3B5</h3></div>
                        <div className="color4" style={{ backgroundColor: '#DDDDC8' }}><h3 className="hex-code">#DDDDC8</h3></div>
                        <h2>Color Palette Example | Hover over boxes for contrast change</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#2e2e4f' }}></div>
                        <div className="color2" style={{ backgroundColor: '#8c8b56' }}></div>
                        <div className="color3" style={{ backgroundColor: '#a6a7bd' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ddddcd' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#382653' }}></div>
                        <div className="color2" style={{ backgroundColor: '#a4705d' }}></div>
                        <div className="color3" style={{ backgroundColor: '#8cbbb9' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ddddcb' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#32354b' }}></div>
                        <div className="color2" style={{ backgroundColor: '#929a55' }}></div>
                        <div className="color3" style={{ backgroundColor: '#a099be' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ddddce' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#382253' }}></div>
                        <div className="color2" style={{ backgroundColor: '#a3635c' }}></div>
                        <div className="color3" style={{ backgroundColor: '#8ec0ba' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ddddcb' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3b4542' }}></div>
                        <div className="color2" style={{ backgroundColor: '#af4d4b' }}></div>
                        <div className="color3" style={{ backgroundColor: '#7cc3c4' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ddd1d2' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#3d2e51' }}></div>
                        <div className="color2" style={{ backgroundColor: '#b03b5a' }}></div>
                        <div className="color3" style={{ backgroundColor: '#79cbbb' }}></div>
                        <div className="color4" style={{ backgroundColor: '#ddd7cc' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#2e2e2e' }}></div>
                        <div className="color2" style={{ backgroundColor: '#6e6e6e' }}></div>
                        <div className="color3" style={{ backgroundColor: '#b9b9b9' }}></div>
                        <div className="color4" style={{ backgroundColor: '#dbdbdb' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#352245' }}></div>
                        <div className="color2" style={{ backgroundColor: '#935669' }}></div>
                        <div className="color3" style={{ backgroundColor: '#9fc5b7' }}></div>
                        <div className="color4" style={{ backgroundColor: '#dcdcd2' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorFive;