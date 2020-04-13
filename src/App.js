import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// Pages
import MainPage from "./Pages/homePage";

// Code Snippets
import CodeSnippets from "./Pages/codeSnippets/codeSnippets";
// HTML
import HTMLCode from "./Pages/codeSnippets/HTML/html";
import HTMLMenu from "./Pages/codeSnippets/HTML/Examples/menu";
// React
import ReactCode from "./Pages/codeSnippets/React/react";

// Best Practices
import BestPractices from "./Pages/bestPractices/bestPractices";
import AltText from "./Pages/bestPractices/Examples/altText";

// Color Palettes
import ColorPalettes from "./Pages/colorPalettes/colorPalettes";
import ColorOne from "./Pages/colorPalettes/Palettes/colorOne";
import ColorTwo from "./Pages/colorPalettes/Palettes/colorTwo";
import ColorThree from "./Pages/colorPalettes/Palettes/colorThree";
import ColorFour from "./Pages/colorPalettes/Palettes/colorFour";
import ColorFive from "./Pages/colorPalettes/Palettes/colorFive";
import ColorSix from "./Pages/colorPalettes/Palettes/colorSix";
import ColorSeven from "./Pages/colorPalettes/Palettes/colorSeven";
import ColorEight from "./Pages/colorPalettes/Palettes/colorEight";

// Error Page
import Error from "./Pages/404/404";

// Components
import Header from "./Components/Header";



function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/codesnippets" component={CodeSnippets}/>
        <Route exact path="/bestpractices" component={BestPractices}/>
        <Route exact path="/bestpractices/alttext" component={AltText}/>
        <Route exact path="/codesnippets/html" component={HTMLCode}/>
        <Route exact path="/codesnippets/html/menu" component={HTMLMenu}/>
        <Route exact path="/codesnippets/react" component={ReactCode}/>
        <Route exact path="/colorpalettes" component={ColorPalettes}/>
        <Route exact path="/colorpalettes/colorone" component={ColorOne}/>
        <Route exact path="/colorpalettes/colortwo" component={ColorTwo}/>
        <Route exact path="/colorpalettes/colorthree" component={ColorThree}/>
        <Route exact path="/colorpalettes/colorfour" component={ColorFour}/>
        <Route exact path="/colorpalettes/colorfive" component={ColorFive}/>
        <Route exact path="/colorpalettes/colorsix" component={ColorSix}/>
        <Route exact path="/colorpalettes/colorseven" component={ColorSeven}/>
        <Route exact path="/colorpalettes/coloreight" component={ColorEight}/>
        <Route exact path="/404" component={Error}/> 
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
