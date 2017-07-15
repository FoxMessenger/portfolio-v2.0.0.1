// ----------------------------
// Dependencies
// ----------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Main from './components/Main';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

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
import Blog from './components/Blog';

// ----------------------------
// Data
// ----------------------------
import designData from '../designData.json';

// ----------------------------
// Render to the screen
// ----------------------------
const App = () => {
    return (
        <HashRouter>

            <div className='container'>
                <Header />
                <Route exact path="/about" component={About} />
                <Route exact path="/art" component={Art} />
                <Route exact path="/code" component={Code} />
                <Route exact path="/connect" component={Connect} />
                <Route exact path="/design" render={ (props) => (
                    <Design {...props} data={designData} />)} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path='/' component={Main} />
            </div>
        </HashRouter>
    );
};


ReactDOM.render( <App />, document.getElementById('app') );
