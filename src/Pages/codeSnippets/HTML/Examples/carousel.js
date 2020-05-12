import React from "react";
import { Helmet } from 'react-helmet'
import Highlight from 'react-highlight'
import "./../style.css"
const TITLE = 'Ulterior Motive | HTML Code Snippets | Menu Example'

const Carousel = () => {
    return(
        <div className="container-html container-code-snippet">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="container">
                <div className="container-item">
                    <div className="container-item-center">
                        <h2>Image Slider</h2>  
                    </div>
                </div>

                <div className="container-item-topic">
                    <h2>What makes an image slider accessible?</h2>
                    <ul>
                        <li>Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.</li>
                        <li>All functionality, including navigating between carousel items, must be operable by keyboard.</li>
                        <li>Changes to carousel items must be communicated to all users, including screen reader users.</li>
                        <li>The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.</li>
                    </ul>
                    <h2>HTML</h2>
                    <div className="code-block">
                    <Highlight className='html'>
                    {"<!DOCTYPE html>"}<br/>
                    {"<html>"}<br/>
                    {"<head>"}<br/>
                    {"    <title>Accessible Menu Item</title>"}<br/>
                    {"    <link rel='stylesheet' href='style.css'>"}<br/>
                    {"</head>"}<br/>
                    {"<body>"}<br/>
                    {"<svg style='display:none;>"}<br/>
                    {"<symbol id='arrow-left' viewBox='0 0 10 10'>"}<br/>
                    {"<path fill='currentColor' d='m9 4h-4v-2l-4 3 4 3v-2h4z'/>"}<br/>
                        {"</symbol>"}<br/>
                    {"<symbol id='arrow-right' viewBox='0 0 10 10'>"}<br/>
                    {"<path fill='currentColor' d='m1 4h4v-2l4 3-4 3v-2h-4z'/>"}<br/>
                        {"</symbol>"}<br/>
                    {"</svg>"}<br/>
                    {"<h1>Photomontages by Hanna Höch</h1>"}<br/>
                    {"<div class='gallery'>"}<br/>
                    {"<div role='region' tabindex='0' aria-describedby='instructions' role='region' aria-label='gallery'>"}<br/>
                    {"<ul>"}<br/>
                        {"<li>"}<br/>
                        {"<a href='https://i.pinimg.com/originals/fe/61/b8/fe61b828c9490313681cda5257bae997.jpg'>"}<br/>
                            {"<figure>"}<br/>
                            {"<img data-src='https://i.pinimg.com/originals/fe/61/b8/fe61b828c9490313681cda5257bae997.jpg' src='data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' /%3E' alt='two male figures in bathing costumes stand behind a wall on a cryptically doodled background'>"}<br/>
                                {"<noscript>"}<br/>
                                {"<img src='https://i.pinimg.com/originals/fe/61/b8/fe61b828c9490313681cda5257bae997.jpg' alt='two male figures in bathing costumes stand behind a wall on a cryptically doodled background'>"}<br/>
                                {"</noscript>"}<br/>
                                {"<figcaption>Heads of State</figcaption>"}<br/>
                                {"</figure>"}<br/>
                            {"</a>"}<br/>
                            {"</li>"}<br/>
                        {"<li>"}<br/>
                        {"<a href='http://www.lypophrenia.com/wp-content/uploads/2011/01/Hannah-H%C3%B6ch_Astronomy-and-Movement-Dada-250%C3%97190-mm-drawing-and-collage-1922.jpg'>"}<br/>
                            {"<figure>"}<br/>
                            {"<img data-src='http://www.lypophrenia.com/wp-content/uploads/2011/01/Hannah-H%C3%B6ch_Astronomy-and-Movement-Dada-250%C3%97190-mm-drawing-and-collage-1922.jpg' src='data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' /%3E' alt='stark photomontage with jagged edges and red, yellow, and blue shades'>"}<br/>
                                {"<noscript>"}<br/>
                                {"<img src='http://www.lypophrenia.com/wp-content/uploads/2011/01/Hannah-H%C3%B6ch_Astronomy-and-Movement-Dada-250%C3%97190-mm-drawing-and-collage-1922.jpg' alt='stark photomontage with jagged edges and red, yellow, and blue shades'>"}<br/>
                                {"</noscript>"}<br/>
                                {"<figcaption>Astronomy and Movement Dada</figcaption>"}<br/>
                                {"</figure>"}<br/>
                            {"</a>"}<br/>
                            {"</li>"}<br/>
                        {"<li>"}<br/>
                        {"<a href='http://www.lypophrenia.com/wp-content/uploads/2011/01/Hannah-H%C3%B6ch_-Mother-watercolour-and-photograph-collage-on-grey-paper-41o%C3%9735o-mm-1925%E2%80%936.jpg'>"}<br/>
                            {"<figure>"}<br/>
                            {"<img data-src='http://www.lypophrenia.com/wp-content/uploads/2011/01/Hannah-H%C3%B6ch_-Mother-watercolour-and-photograph-collage-on-grey-paper-41o%C3%9735o-mm-1925%E2%80%936.jpg' src='data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' /%3E' alt='Strange portrait-like montage. The subject is rotund and wears a torturous looking mask.'>"}<br/>
                                {"<noscript>"}<br/>
                                {"<img src='http://www.lypophrenia.com/wp-content/uploads/2011/01/Hannah-H%C3%B6ch_-Mother-watercolour-and-photograph-collage-on-grey-paper-41o%C3%9735o-mm-1925%E2%80%936.jpg' alt='stark photomontage with jagged edges and red, yellow, and blue shades'>"}<br/>
                                {"</noscript>"}<br/>
                                <figcaption>Mother</figcaption>
                                {"</figure>"}<br/>
                            {"</a>"}<br/>
                            {"</li>"}<br/>
                        {"<li>"}<br/>
                        {"<a href='https://i.pinimg.com/originals/53/d9/e2/53d9e2cf92b05d3f7ddd903e5c91538a.jpg'>"}<br/>
                            {"<figure>"}<br/>
                            {"<img data-src='https://i.pinimg.com/originals/53/d9/e2/53d9e2cf92b05d3f7ddd903e5c91538a.jpg' src='data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' /%3E' alt='Reclining nude on a colourful bed, wearing a large, monster-like mask and spectacles'>"}<br/>
                                {"<noscript>"}<br/>
                                {"<img src='https://i.pinimg.com/originals/53/d9/e2/53d9e2cf92b05d3f7ddd903e5c91538a.jpg' alt='stark photomontage with jagged edges and red, yellow, and blue shades'>"}<br/>
                                {"</noscript>"}<br/>
                                {"<figcaption>Untitled</figcaption>"}<br/>
                                {"</figure>"}<br/>
                            {"</a>"}<br/>
                            {"</li>"}<br/>
                        {"<li>"}<br/>
                        {"<a href='https://d32dm0rphc51dk.cloudfront.net/WGpoh18Y3iHXoI9g7rHSBw/large.jpg'>"}<br/>
                            {"<figure>"}<br/>
                            {"<img data-src='https://d32dm0rphc51dk.cloudfront.net/WGpoh18Y3iHXoI9g7rHSBw/large.jpg' src='data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' /%3E' alt='Photomontoge of female figures and automobile parts, featuing several instances of the BMW logo'>"}<br/>
                                {"<noscript>"}<br/>
                                {"<img src='https://d32dm0rphc51dk.cloudfront.net/WGpoh18Y3iHXoI9g7rHSBw/large.jpg' alt='stark photomontage with jagged edges and red, yellow, and blue shades'>"}<br/>
                                {"</noscript>"}<br/>
                                {"<figcaption>The Beautiful Girl</figcaption>"}<br/>
                                {"</figure>"}<br/>
                            {"</a>"}<br/>
                            {"</li>"}<br/>
                        {"</ul>"}<br/>
                    {"</div>"}<br/>
                    {"<div id='instructions'>"}<br/>
                    {"<p id='touch'>"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-left'></use></svg>"}<br/>
                        {"swipe for more"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-right'/></svg>"}<br/>
                        {"</p>"}<br/>
                        {"<p id='hover'>"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-left'></use></svg>"}<br/>
                        {"scroll for more"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-right'/></svg>"}<br/>
                        {"</p>"}<br/>
                        {"<p id='focus'>"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-left'></use></svg>"}<br/>
                        {"use your arrow keys for more"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-right'/></svg>"}<br/>
                        {"</p>"}<br/>
                        {"<p id='hover-and-focus'>"}<br/>
                        {" <svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-left'></use></svg>"}<br/>
                        {"scroll or use arrow keys for more"}<br/>
                        {"<svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-right'/></svg>"}<br/>
                        {" </p>"}<br/>
                        {"</div>"}<br/>
                    {"</div>"}<br/>
                    {"</body>"}<br/>
                    {"</html>"}
                </Highlight>
                </div>

                
                <h2>CSS</h2>
                <div className="code-block">
                    <Highlight className='html'>
                    {"* { font-size: inherit; font-family: inherit; margin: 0; }"}<br/>
                    {""}<br/>
                    {"html { font-size: 120%; font-family: sans-serif; margin: 1rem; }"}<br/>
                    {""}<br/>
                    {".vh { position: absolute !important; clip: rect(1px, 1px, 1px, 1px); padding:0 !important; border:0 !important; height: 1px !important; width: 1px !important; overflow: hidden; }"}<br/>
                    {""}<br/>
                    {"[data-menu-component] { position: relative; display: inline-block; }"}<br/>
                    {""}<br/>
                    {"label { display: inline-block; }"}<br/>
                    {""}<br/>
                    {"[role='menu'] ul { list-style: none; margin: 0; padding: 0; }"}<br/>
                    {""}<br/>
                    {"[data-opens-menu], [role='menu'] a { line-height: 1; text-align: left; background: black; border: 0; color: #fff; padding: 0.33rem 0.5rem; text-decoration: none; }"}<br/>
                    {""}<br/>
                    {"[type='checkbox']:focus + [data-opens-menu], [role='menu'] a:focus { outline: none; background: darkBlue; }"}<br/>
                    {""}<br/>
                    {":checked + label .expanded-text { display: inline; }"}<br/>
                    {""}<br/>
                    {":checked + label .collapsed-text { display: none; }"}<br/>
                    {""}<br/>
                    {"[type='checkbox']:not(:checked) + label .expanded-text { display: none; }"}<br/>
                    {""}<br/>
                    {"[type='checkbox']:not(:checked) + label .collapsed-text { display: inline;}"}<br/>
                    {""}<br/>
                    {"[role='menu'] { position: absolute; left: 0; display: none; }"}<br/>
                    {""}<br/>
                    {":checked ~ [role='menu'] { display: block; }"}<br/>
                    {""}<br/>
                    {"[data-menu-origin='right'] { left: auto; right: 0; }"}<br/>
                    {""}<br/>
                    {"[role='menu'] a { display: block; min-width: 100%; margin-top: 0.125rem; white-space: nowrap; }"}<br/>
                    {""}<br/>
                </Highlight>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Carousel;