import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
    return (
        <div className="Navigation-Body">
        <header className="main-navigation">
            <div className="main-navigation_logo">
                <h3>Setu Consulting</h3>
            </div>
        <nav className="main-navigation_items">
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Your Teams</Link></li>
                <li><Link to="/Surveys">Surveys</Link></li>
                <li><Link to="/Message">Message</Link></li>
                <li><Link to="/Submitted">Submitted</Link></li>
                
            </ul>
            {/* <img src="./public/logo.png" alt="logo" height={100} /> */}

        </nav>
        </header>
        </div>
    );
};

export default Navbar;