import React from "react";
import { Helmet } from 'react-helmet'
import "./style.css"
import Pancakes from '../../../pancakes.png'
const TITLE = 'Ulterior Motive |  Color Selection'

const ColorSelection = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                            <h1>Color Selection</h1>  
                    </div>
                </div>
                <div className="container-item-topic">
                    <div className="text">
                        <h2>Why is color palette selection important?</h2>
                        <ul>
                            <li>People with different types of visual impairments, might not be able to tell these colors apart.</li>
                            <li>It is important that every color is distinguishable so that the largest amount of people can see the information that is available to and not miss out on important features the website may have.</li>
                        </ul>
                        <h2>Bad example of a color palette selection:</h2>
                        <ul>
                            <li>Below, we have a bad example of color palette selection, where the colors can't be distinguised by many types of color vision deficiency.</li>
                            <li>The first and widest color palette is the original, while the smaller ones represent what how people with the listed types of color vision deficiecy would see them.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="color-palette-example">
            <div className="main-color">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#FFBBCC' }}><h3 className="hex-code">#FFBBCC</h3></div>
                        <div className="color2" style={{ backgroundColor: '#FFCCCC' }}><h3 className="hex-code">#FFCCCC</h3></div>
                        <div className="color3" style={{ backgroundColor: '#FFDDCC' }}><h3 className="hex-code">#FFDDCC</h3></div>
                        <div className="color4" style={{ backgroundColor: '#FFEECC' }}><h3 className="hex-code">#FFEECC</h3></div>
                        <h2>Color Palette Example</h2>
                    </div>
            </div>
            <div className="container">
                <div className="container-item item1">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#E5E4C8' }}></div>
                        <div className="color2" style={{ backgroundColor: '#EBEACC' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F1F1D0' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F8F8D5' }}></div>
                        <h2>Protanopia</h2>
                    </div>
                </div>
                <div className="container-item item2">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#F5D5CA' }}></div>
                        <div className="color2" style={{ backgroundColor: '#F7DFCC' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F9E9CE' }}></div>
                        <div className="color4" style={{ backgroundColor: '#FCF4D1' }}></div>
                        <h2>Protanomaly</h2>
                    </div>
                </div>
                <div className="container-item item3">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#E9EEC7' }}></div>
                        <div className="color2" style={{ backgroundColor: '#EEF1CC' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F3F6D1' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F9FAD7' }}></div>
                        <h2>Deuteranopia</h2>
                    </div>
                </div>
                <div className="container-item item4">
                     <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#F3D0CA' }}></div>
                        <div className="color2" style={{ backgroundColor: '#F6DBCC' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F9E7CE' }}></div>
                        <div className="color4" style={{ backgroundColor: '#FCF3D1' }}></div>
                        <h2>Deuteranomaly</h2>
                    </div>
                </div>
                <div className="container-item item5">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#FCC5C4' }}></div>
                        <div className="color2" style={{ backgroundColor: '#FDCCCC' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FDD3D4' }}></div>
                        <div className="color4" style={{ backgroundColor: '#FEDCDD' }}></div>
                        <h2>Tritanopia</h2>
                    </div>
                </div>
                <div className="container-item item6">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#FDC0C9' }}></div>
                        <div className="color2" style={{ backgroundColor: '#FECCCC' }}></div>
                        <div className="color3" style={{ backgroundColor: '#FED8D0' }}></div>
                        <div className="color4" style={{ backgroundColor: '#FFE6D3' }}></div>
                        <h2>Tritanomaly</h2>
                    </div>
                </div>
                <div className="container-item item7">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#D4D4D4' }}></div>
                        <div className="color2" style={{ backgroundColor: '#DDDDDD' }}></div>
                        <div className="color3" style={{ backgroundColor: '#E6E6E6' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F0F0F0' }}></div>
                        <h2>Achromatopsia</h2>
                    </div>
                </div>
                <div className="container-item item8">
                    <div className="color-box">
                        <div className="color1" style={{ backgroundColor: '#E9C9D1' }}></div>
                        <div className="color2" style={{ backgroundColor: '#EDD5D5' }}></div>
                        <div className="color3" style={{ backgroundColor: '#F2E2DB' }}></div>
                        <div className="color4" style={{ backgroundColor: '#F7EFE0' }}></div>
                        <h2>Achromanomaly</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ColorSelection;