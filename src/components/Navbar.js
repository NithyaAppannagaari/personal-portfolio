import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className = "navbar">
                <div className = "navbar-left">
                <ul className = "nav-links">
                    <li>
                        <a href="/">Home</a>     
                    </li> 
                    <li>
                        <a href="/projects">My Code</a>     
                    </li>  
                    <li>
                        <a href="/photography">My Lens</a>     
                    </li> 
                    <li>
                        <a href="/resume">My Resume</a>     
                    </li> 
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;