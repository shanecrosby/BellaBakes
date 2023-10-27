// src/components/Footer.js

import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './css/footer.css';

const Footer = () => {
    return (
        <footer>
            {/* Section 1 - Left: */}
            <div className="footer-container plaid">
                <div className='footer-bg'>
                    <div className="footer-left">
                        <h1>Bella Bakes</h1>
                        <h2>Bakery and Patisserie</h2>
                        <p className='address-block'>
                            <b>Bella Amato-Farina</b><br />
                            123 Somerset Boulevard<br />
                            Sorrento, 6020<br />
                            <b>Phone:</b> 1300 975 708
                        </p>
                    
                        {/* Social Buttons: */}
                            <ul className='social-icons'>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faXTwitter} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                <li><FontAwesomeIcon icon={faPhone} /></li>
                            </ul>
                    </div>
                    {/*Section 2 - Right:*/}
                    <div className="footer-right">
                        <div className="columns">
                            {/* Column A: */}
                            <div className="column-left">
                                <h3>Services</h3>
                                <ul className='footer-list'>
                                    <li>Café</li>
                                    <li>Functions</li>
                                    <li><Link to="/catering">External Catering</Link></li>
                                </ul>
                            </div>
                            {/* Column B: */}
                            {/*<div className="column-right">
                                <h3>Resources</h3>
                                <ul>
                                    <li>Special Events</li>
                                    <li>Blog</li>
                                    <li>FAQs</li>
                                </ul>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="footer-bar">
                        <p>&copy; 2023 Bella Bakes Bakery and Patisserie. All Rights Reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;