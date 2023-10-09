// src/components/HomeCard.js
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import icons from '../components/icons'
import './css/homecard.css';

const HomeCardComponent = ({ homecard, image }) => {
    return (
        <div className="home-card">
            {image && <GatsbyImage image={image} alt={homecard.imgalttext} />}
            <h3>{homecard.title}</h3>
            <p>{homecard.description}</p>
        </div>
    );
};

const HomeServiceCardComponent = ({ servicecard }) => {
    const Icon = icons[servicecard.icon];

    return (
        <div className="service-card">
            {Icon && <Icon />}
            <h3>{servicecard.title}</h3>
            <p>{servicecard.description}</p>
        </div>
    );
};

export { HomeCardComponent, HomeServiceCardComponent };