// src/components/HomeCard.js
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import './css/homecard.css';

const HomeCardComponent = ({ homecard, image }) => {
    //console.log("Received Image: ", image); // Debugging line

    return (
        <div className="home-card">
            <GatsbyImage image={image} alt={homecard.imgalttext} />
            <h3>{homecard.title}</h3>
            <p>{homecard.description}</p>
        </div>
    );
};

const HomeServiceCardComponent = ({ servicecard, image }) => {
    //console.log("Received Image: ", image); // Debugging line

    return (
        <div className="service-card">
            <div className="icon"><GatsbyImage image={image} alt={servicecard.imgalttext} /></div>
            <h3 className="service-title">{servicecard.title}</h3>
            <p>{servicecard.description}</p>
        </div>
    );
};

export { HomeCardComponent, HomeServiceCardComponent };