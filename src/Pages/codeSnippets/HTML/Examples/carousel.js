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
                    {"* {"}<br/>
                    {"margin: 0;"}<br/>
                    {"padding: 0;"}<br/>
                    {"box-sizing: border-box;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"body {"}<br/>
                        {"font-family: sans-serif;"}<br/>
                        {"margin: 3rem auto;"}<br/>
                        {"max-width: 40rem;"}<br/>
                        {"padding: 1rem;"}<br/>
                        {"color: #111;"}<br/>
                        {"}"}<br/>
                        {""}<br/>
                   {"h1 {"}<br/>
                    {"text-align: center;"}<br/>
                    {" margin-bottom: 1rem;"}<br/>
                   {"}"}<br/>
                   {""}<br/>
                   {"[aria-label='gallery'] {"}<br/>
                    {"border: 2px solid;"}<br/>
                    {"overflow-x: scroll;"}<br/>
                    {"-webkit-overflow-scrolling: touch;"}<br/>
                    {"-webkit-scroll-snap-type: mandatory;"}<br/>
                    {"-ms-scroll-snap-type: mandatory;"}<br/>
                    {"scroll-snap-type: mandatory;"}<br/>
                    {"-webkit-scroll-snap-points-x: repeat(100%);"}<br/>
                    {"-ms-scroll-snap-points-x: repeat(100%);"}<br/>
                    {"scroll-snap-points-x: repeat(100%);"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery']:focus, "}<br/>
                    {"[aria-label='gallery controls'] button:focus,"}<br/>
                    {"[aria-label='gallery'] a:focus img {"}<br/>
                    {"outline: 4px solid DodgerBlue;"}<br/>
                    {"outline-offset: -6px;"}<br/>
                    {" }"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery controls'] button:focus {"}<br/>
                    {"outline-offset: -4px;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery'] ul {"}<br/>
                    {"display: flex;"}<br/>
                    {"}"}<br/>
                    {""}<br/>

                    {"[aria-label='gallery'] li {"}<br/>
                        {"list-style: none;"}<br/>
                        {"flex: 0 0 100%;"}<br/>
                        {"padding: 2rem;"}<br/>
                        {"height: 60vh;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery'] figure {"}<br/>
                    {"display: flex;"}<br/>
                    {"flex-direction: column;"}<br/>
                    {" align-items: center;"}<br/>
                    {"justify-content: center;"}<br/>
                    {"width: 100%;"}<br/>
                    {"height: 100%;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery'] a:focus {"}<br/>
                    {"outline: none;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery'] figcaption {"}<br/>
                    {"padding: 0.5rem;"}<br/>
                    {"font-style: italic;"}<br/>
                    {"text-align: center;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery'] img {"}<br/>
                    {"min-height: 1px;"}<br/>
                    {"min-width: 1px;"}<br/>
                    {"max-height: calc(100% - 2rem);"}<br/>
                    {"margin-top: 2rem;"}<br/>
                    {"max-width: 100%;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"#instructions {"}<br/>
                    {"position: relative;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"#instructions p {"}<br/>
                    {"padding: 1rem;"}<br/>
                    {"text-align: center;"}<br/>
                    {"color: #fefefe;"}<br/>
                    {"background-color: #111;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"#focus, #hover, #hover-and-focus, #touch {"}<br/>
                    {"display: none;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery']:focus + #instructions #focus,"}<br/>
                    {"[aria-label='gallery']:hover + #instructions #hover {"}<br/>
                    {"display: block;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery']:hover + #instructions #hover + #focus {"}<br/>
                    {"display: none;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery']:hover:focus + #instructions #hover, "}<br/>
                    {"[aria-label='gallery']:hover:focus + #instructions #focus {"}<br/>
                    {"display: none;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery']:hover:focus + #instructions #hover-and-focus {"}<br/>
                    {"display: block;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"#instructions svg {"}<br/>
                    {"height: 1.5rem;"}<br/>
                    {"width: 1.5rem;"}<br/>
                    {"fill: #fff;"}<br/>
                    {"vertical-align: -0.5rem;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {".touch #instructions p {"}<br/>
                    {"display: none !important;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {".touch #instructions #touch {"}<br/>
                    {"display: block !important;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {".gallery {"}<br/>
                    {"position: relative;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery controls'] li {"}<br/>
                    {"list-style: none;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"[aria-label='gallery controls'] button {"}<br/>
                    {"position: absolute;"}<br/>
                    {"top: 0;"}<br/>
                    {"background: #111;"}<br/>
                    {"color: #fff;"}<br/>
                    {"border: 2px solid #111;"}<br/>
                    {"border-radius: 0;"}<br/>
                    {"width: 3rem;"}<br/>
                    {"height: calc(60vh + 4px);"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"#previous {"}<br/>
                    {"left: 0;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"#next {"}<br/>
                    {"right: 0;"}<br/>
                    {"}"}<br/>
                    {""}<br/>
                    {"button svg {"}<br/>
                    {"width: 2rem;"}<br/>
                    {"height: 2rem;"}<br/>
                    {" }"}<br/>
                    {""}<br/>
                </Highlight>
                </div>


                <h2>JS</h2>
                <div className="code-block">
                    <Highlight className='html'>
                    {"'use strict';"}<br/>

                    {"(function () {"}<br/>
                    {"/* touch detection */"}<br/>
                    {"window.addEventListener('touchstart', function touched() {"}<br/>
                    {"    document.body.classList.add('touch');"}<br/>
                    {"    window.removeEventListener('touchstart', touched, false);"}<br/>
                    {"}, false);"}<br/>

                    {"/* lazy loading and button controls */"}<br/>
                    {"var gallery = document.querySelector('[aria-label='gallery']');"}<br/>
                    {"var slides = gallery.querySelectorAll('li');"}<br/>
                    {"var instructions = document.getElementById('instructions');"}<br/>

                    {"Array.prototype.forEach.call(slides, function (slide) {"}<br/>
                    {"    slide.querySelector('a').setAttribute('tabindex', '-1');"}<br/>
                    {"});"}<br/>

                    {"var observerSettings = {"}<br/>
                    {"    root: gallery,"}<br/>
                    {"    rootMargin: '-10px'"}<br/>
                    {"};"}<br/>

                    {"if ('IntersectionObserver' in window) {"}<br/>
                    {"    var scrollIt = function scrollIt(slideToShow) {"}<br/>
                    {"    var scrollPos = Array.prototype.indexOf.call(slides, slideToShow) * (gallery.scrollWidth / slides.length);"}<br/>
                    {"    gallery.scrollLeft = scrollPos;"}<br/>
                    {"    };"}<br/>

                    {"    var showSlide = function showSlide(dir, slides) {"}<br/>
                    {"    var visible = document.querySelectorAll('[aria-label='gallery'] .visible');"}<br/>
                    {"    var i = dir === 'previous' ? 0 : 1;"}<br/>

                    {"    if (visible.length > 1) {"}<br/>
                    {"         scrollIt(visible[i]);"}<br/>
                    {"    } else {"}<br/>
                    {"       var newSlide = i === 0 ? visible[0].previousElementSibling : visible[0].nextElementSibling;"}<br/>
                    {"        if (newSlide) {"}<br/>
                    {"       scrollIt(newSlide);"}<br/>
                    {"        }"}<br/>
                    {"    }"}<br/>
                    {"    };"}<br/>

                    {"    var callback = function callback(slides, observer) {"}<br/>
                    {"    Array.prototype.forEach.call(slides, function (entry) {"}<br/>
                    {"        entry.target.classList.remove('visible');"}<br/>
                    {"        var link = entry.target.querySelector('a');"}<br/>
                    {"        link.setAttribute('tabindex', '-1');"}<br/>
                    {"        if (!entry.intersectionRatio > 0) {"}<br/>
                    {"        return;"}<br/>
                    {"        }"}<br/>
                    {"        var img = entry.target.querySelector('img');"}<br/>
                    {"        console.log(img);"}<br/>
                    {"        if (img.dataset.src) {"}<br/>
                    {"        img.setAttribute('src', img.dataset.src);"}<br/>
                    {"        img.removeAttribute('data-src');"}<br/>
                    {"        }"}<br/>
                    {"        entry.target.classList.add('visible');"}<br/>
                    {"        link.removeAttribute('tabindex', '-1');"}<br/>
                    {"    });"}<br/>
                    {"    };"}<br/>

                    {"    var observer = new IntersectionObserver(callback, observerSettings);"}<br/>
                    {"    Array.prototype.forEach.call(slides, function (t) {"}<br/>
                    {"    return observer.observe(t);"}<br/>
                    {"    });"}<br/>

                    {"    var controls = document.createElement('ul');"}<br/>
                    {"    controls.setAttribute('aria-label', 'gallery controls');"}<br/>
                    {"    controls.innerHTML = '\n    <li><button type='button' id='previous' aria-label='previous'>\n      <svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-left'></use></svg>\n    </button></li>\n    <li><button type='button' id='next' aria-label='next'>\n      <svg aria-hidden='true' focusable='false'><use xlink:href='#arrow-right'/></svg>\n    </button></li>\n    ';"}<br/>
                    {"    instructions.parentNode.insertBefore(controls, instructions.nextElementSibling);"}<br/>
                    {"    instructions.parentNode.style.padding = '0 3rem';"}<br/>

                    {"    controls.addEventListener('click', function (e) {"}<br/>
                    {"    showSlide(e.target.closest('button').id, slides);"}<br/>
                    {"    });"}<br/>
                    {"} else {"}<br/>
                    {"    Array.prototype.forEach.call(slides, function (s) {"}<br/>
                    {"    var img = s.querySelector('img');"}<br/>
                    {"    img.setAttribute('src', img.getAttribute('data-src'));"}<br/>
                    {"    });"}<br/>
                    {"}"}<br/>
                    {"})();"}<br/>
                    {""}<br/>
                </Highlight>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Carousel;