// src/components/MenuItemCard.js

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import './css/menuitemcard.css';

const MenuItemCardComponent = ({ menuItem, image }) => {
    return (
        <div className="menuItem-card">
            {image && <GatsbyImage image={image} alt={menuItem.imgalttext} />}
            <h2>{menuItem.name}</h2>
            <p>{menuItem.description}</p>
            <input type="checkbox" />
        </div>
    );
};

export default MenuItemCardComponent;