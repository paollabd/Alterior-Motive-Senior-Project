import React from "react";
import { Helmet } from 'react-helmet'
import "./colorOne.css"
const TITLE = 'Ulterior Motive | Color Palette Example'

const ColorSix = () => {
    return(
        <div className="color-palette-example">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#479187' }}><h3 className="hex-code">#479187</h3></div>
                        <div className="color2" style={{ backgroundColor: '#94E3A8' }}><h3 className="hex-code">#94E3A8</h3></div>
                        <div className="color3" style={{ backgroundColor: '#6067BE' }}><h3 className="hex-code">#6067BE</h3></div>
                        <div className="color4" style={{ backgroundColor: '#453263' }}><h3 className="hex-code">#453263</h3></div>
                        <h2>Color Palette Example</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#6e7089' }}></div>
                        <div className="color2" style={{ backgroundColor: '#bcbcb9' }}></div>
                        <div className="color3" style={{ backgroundColor: '#6363ae' }}></div>
                        <div className="color4" style={{ backgroundColor: '#3d3d5a' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#5a7f88' }}></div>
                        <div className="color2" style={{ backgroundColor: '#a7cdb1' }}></div>
                        <div className="color3" style={{ backgroundColor: '#6265b6' }}></div>
                        <div className="color4" style={{ backgroundColor: '#42385f' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#6a658a' }}></div>
                        <div className="color2" style={{ backgroundColor: '#b7b1bc' }}></div>
                        <div className="color3" style={{ backgroundColor: '#6362aa' }}></div>
                        <div className="color4" style={{ backgroundColor: '#404058' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#5c8388' }}></div>
                        <div className="color2" style={{ backgroundColor: '#a8d2b2' }}></div>
                        <div className="color3" style={{ backgroundColor: '#6265b5' }}></div>
                        <div className="color4" style={{ backgroundColor: '#42385d' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#4d8b8c' }}></div>
                        <div className="color2" style={{ backgroundColor: '#9ac4c7' }}></div>
                        <div className="color3" style={{ backgroundColor: '#609f9c' }}></div>
                        <div className="color4" style={{ backgroundColor: '#455351' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#4b8e89' }}></div>
                        <div className="color2" style={{ backgroundColor: '#97d5b4' }}></div>
                        <div className="color3" style={{ backgroundColor: '#6085b2' }}></div>
                        <div className="color4" style={{ backgroundColor: '#45425c' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#7f7f7f' }}></div>
                        <div className="color2" style={{ backgroundColor: '#c9c9c9' }}></div>
                        <div className="color3" style={{ backgroundColor: '#737373' }}></div>
                        <div className="color4" style={{ backgroundColor: '#404040' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#6a8783' }}></div>
                        <div className="color2" style={{ backgroundColor: '#b4d5bb' }}></div>
                        <div className="color3" style={{ backgroundColor: '#6c6e9b' }}></div>
                        <div className="color4" style={{ backgroundColor: '#423b51' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorSix;