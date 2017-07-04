// ----------------------------
// Dependencies
// ----------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Main from './components/Main';

// ----------------------------
// Main Pages
// ----------------------------

// About Page
import About from './components/About';
// Contact Page
// import Contact from './components/Contact';

// Art related projects
import Art from './components/Art';

// Javascript and other Code related projects
import Code from './components/Code';
// Connecting with others
import Connect from './components/Connect'
// Design and Advertisement related projects
import Design from './components/Design';
// Travel Blog 
import Travel from './components/Travel';

// ----------------------------
// Render to the screen
// ----------------------------
const App = () => {
    return (
        <HashRouter>
            <div>
                <Route exact path="/about" component={About} />
                <Route exact path="/art" component={Art} />
                <Route exact path="/code" component={Code} />
                <Route exact path="/connect" component={Connect} />
                <Route exact path="/design" component={Design} />
                <Route exact path="/travel" component={Travel} />
                <Route exact path='/' component={Main} />
            </div>
        </HashRouter>
    );
};


ReactDOM.render( <App />, document.getElementById('app') );
