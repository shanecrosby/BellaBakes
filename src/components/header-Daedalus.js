// src/components/Header.js

import React from 'react';
import { Link } from 'gatsby';
import './css/header.css';

const Header = () => {
    return (
        <header>
            <div className='header-container plaid'>
                <div className='header-bg'>
                    <div className='nav-container'>
                        <div className='logo'>
                            <h1>Bella Bakes</h1>
                            <h2>Bakery and Patisserie</h2>
                        </div>
                        <nav className='nav-bar'>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/catering">Catering</Link></li>
                                <li className='active'><Link to="/events">Events</Link></li>
                            </ul>
                        </nav>
                        <Link to="/contact" className='button-link'>Contact</Link>
                    </div>
                </div>  
            </div>
        </header>
    );
};

export default Header;