// src/components/EventCard.js

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './css/eventcard.css';

const EventCard = ({ event, image, formattedDate }) => {
    return (
        <div className="event-card">
            {image && <GatsbyImage image={image} alt={event.imgalttext} />}
            <h4>{formattedDate}</h4>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className="entryfee"><strong>Entry:</strong> {event.entryfee}</p>
            <p className="maxtickets"><strong>Event capacity:</strong> {event.maxtickets}</p>
            <Link to="/bookings" id='buytickets' className='button-link'>Buy Tickets</Link>
        </div>
    );
};

export default EventCard;