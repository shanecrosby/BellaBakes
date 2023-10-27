// src/components/MenuEntry.js
import React from 'react';

const MenuEntryComponent = ({ sectionTitle, items }) => {

    return (
        <div className="menu-section">
            <div className='menu-section-title'><h3>{sectionTitle}</h3></div>
            {items.map((item, index) => (
                <div key={index} className="menu-entry">
                    <p className="menuitem-title">{item.name}</p>
                    <p className="menuitem-description">{item.description}</p>
                    <p className="menuitem-price">{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export {MenuEntryComponent};