// src/components/MenuItemCard.js

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import './css/menuitemcard.css';

const MenuItemCardComponent = ({ menuItem, image, updateSelectedItems, recalculateCost }) => {
    return (
        <div className="menuItem-card">
            <GatsbyImage image={image} alt={menuItem.imgalttext} className="menuItem-image" />
            <div className="title-checkbox-container">
                <h3 className='menuItem-header'>{menuItem.name}</h3>
                <label htmlFor={menuItem.itemID} className="checkbox-container" >
                    <input 
                        type="checkbox" 
                        id={menuItem.itemID} 
                        name={menuItem.itemID} 
                        onChange={(e) => {
                            updateSelectedItems(menuItem.itemID, e.target.checked); 
                            recalculateCost();
                        }} 
                    />
                    <span className="tickmark"></span></label>
            </div>
            <p>{menuItem.description}</p>
        </div>
    );
};

export default MenuItemCardComponent;
