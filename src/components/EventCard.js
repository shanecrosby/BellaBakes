// src/components/EventCard.js

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './css/eventcard.css';

const EventCard = ({ event, image, formattedDate }) => {
    const isTicketed = event.ticketedevent === true;
    const limitedSeats = event.maxtickets > 0 && event.entryfee === 0;
    const bookingURL = `/bookings?eventId=${event.eventID}`

    return (
        <div className="event-card">
            <GatsbyImage image={image} alt={event.imgalttext} />
            <h4>{formattedDate}</h4>
            <h3>{event.title}</h3>
            <p>{event.description}</p>

            { limitedSeats && (
                <>
                    <p className="maxtickets"><strong>Event capacity:</strong> {event.maxtickets}</p>
                    <Link to={bookingURL} id='buytickets' className='button-link'>Reserve a seat</Link>
                </>
            )}
            {isTicketed && (
                <>
                    <p className="maxtickets"><strong>Event capacity:</strong> {event.maxtickets}</p>
                    <p className="entryfee"><strong>Entry:</strong> ${event.entryfee}</p>
                    <Link to={bookingURL} id='buytickets' className='button-link'>Buy Tickets</Link>
                </>
            )}
        </div>
    );
};

export default EventCard;