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
                <div className="container-item item2">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
                <div className="container-item item3">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
                <div className="container-item item4">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
                <div className="container-item item5">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
                <div className="container-item item6">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
                <div className="container-item item7">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
                <div className="container-item item8">
                <div className="color-box">
                        <div className="color1"><div className="hexdiv"><h3 className="hex-code">#208FED</h3></div></div>
                        <div className="color2"><div className="hexdiv"><h3 className="hex-code">#064380</h3></div></div>
                        <div className="color3"><div className="hexdiv"><h3 className="hex-code">#FBFEA8</h3></div></div>
                        <div className="color4"><div className="hexdiv"><h3 className="hex-code">#FD4E6B</h3></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPalettes;