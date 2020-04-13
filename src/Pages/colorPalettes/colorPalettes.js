import React from "react";
import { Helmet } from 'react-helmet'
import {NavLink} from 'react-router-dom';
import "./style.css"
const TITLE = 'Ulterior Motive | Color Palettes'

const ColorPalettes = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
                {/* <style>{'body { background-color: #FEB2B2; }'}</style> */}
            </Helmet>
            <div className="container">
            <NavLink to="/colorpalettes/colorone" exact aria-label="Color Palette Example">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/colortwo" exact aria-label="Color Palette Example">
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#1A2634</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#213F5E</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FECB2F</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FEE1B4</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/colorthree" exact aria-label="Color Palette Example">
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#2F90B2</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#20566E</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#EFDDB4</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#F73920</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/colorfour" exact aria-label="Color Palette Example">
                <div className="container-item item4">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#303D4F</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#517085</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FAAF4C</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#DC7043</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/colorfive" exact aria-label="Color Palette Example">
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#3D0C59</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#B32062</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#74D3B5</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#DDDDC8</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/colorsix" exact aria-label="Color Palette Example">
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#479187</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#94E3A8</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#6067BE</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#453263</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/colorseven" exact aria-label="Color Palette Example">
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#4A2775</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#61549D</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#B96DDC</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#F3E876</h3></div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/colorpalettes/coloreight" exact aria-label="Color Palette Example">
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#65BBB6</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#A3E0FE</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#AC5BCB</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#4A3E83</h3></div></div>
                    </div>
                </div>
            </NavLink>
            </div>
        </div>
    );
}

export default ColorPalettes;