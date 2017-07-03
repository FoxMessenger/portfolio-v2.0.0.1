
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (                
        <div className='row container'>
            <nav className="navbar">
                <a className='navbar-brand' href="/"> 
                        <img id='logo' src='assets/images/FoxFace.png' />
                </a>
                <ul className="nav navbar-text nav-pills navbar-right">
                    <li><Link to="/about">Liam Fox</Link></li>
                    <li><Link to="/connect">Connect</Link></li>
                    <li><Link to="/travel">Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;