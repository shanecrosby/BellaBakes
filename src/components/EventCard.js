// src/components/EventCard.js

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './css/eventcard.css';

const EventCard = ({ event, image, formattedDate }) => {
    const isTicketed = event.ticketedevent === true;
    const limitedSeats = event.maxtickets;
    const bookingURL = `/bookings?eventId=${event.eventID}`

    return (
        <div className="event-card">
            <GatsbyImage image={image} alt={event.imgalttext} />
            <h4>{formattedDate}</h4>
            <h3>{event.title}</h3>
            <p>{event.description}</p>

            {limitedSeats && event.entryfee === 0 && (
                <>
                    <p className="maxtickets"><strong>Event capacity:</strong> {event.maxtickets}</p>
                    <p>Aim to arrive slightly early to ensure you get a seat.</p>
                </>
            )}
            {isTicketed && event.entryfee > 0 && (
                <>
                    <p className="maxtickets"><strong>Event capacity:</strong> {event.maxtickets}</p>
                    <p className="entryfee"><strong>Entry:</strong> ${event.entryfee}</p>
                    <Link to={bookingURL} id='buytickets' className='button-link'>Buy Tickets</Link>
                </>
            )}
            {isTicketed && event.entryfee === 0 && (
                <>
                    <p className="maxtickets"><strong>Event capacity:</strong> {event.maxtickets}</p>
                    <p className="entryfee"><strong>Entry:</strong> Free</p>
                    <Link to={bookingURL} id='buytickets' className='button-link'>Buy Tickets</Link>
                </>
            )}
        </div>
    );
};

export default EventCard;