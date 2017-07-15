// ----------------------------
// Dependencies
// ----------------------------
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

// ----------------------------
// Static Bars
// ----------------------------
import Header from './layout/Header';
import Footer from './layout/Footer';

// ----------------------------
// Main Pages
// ----------------------------

// About Page
import About from './About';
// Contact Page
// import Contact from './components/Contact';

// Art related projects
import Art from './Art';
// Javascript and other Code related projects
import Code from './Code';
// Design and Advertisement related projects
import Design from './Design';
// Travel Blog 
import Blog from './Blog';

// ----------------------------
// Render to the screen
// ----------------------------
class Main extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
            <div>
                <section id='hero' className='full'>
                    <figure className='ppr'> 
                        <span>            
                            <a className='lf'>LF</a>
                        </span>
                        
                
                        <h1>
                            <a className='hidden-text'><Link to='/design'>designer</Link> </a>
                            <a className='hidden-text'><Link to='/code'> coder</Link>  </a>
                            <a className='hidden-text'><Link to='/art'>artist</Link>  </a>
                            <a className='hidden-text'><Link to='/blog'>blog</Link>  </a>
                        </h1>
                    </figure>
                </section>
            </div>
        );
    }
};

export default Main;
