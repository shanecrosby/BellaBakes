// src/pages/events.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import EventCard from '../components/EventCard'; // Import EventCard component

const EventPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allEventsJson {
                nodes {
                    eventID
                    title
                    description
                    image
                    datetime
                    entryfee
                    ticketedevent
                    maxtickets
                }
            }
            allFile(filter: {extension: { in: ["jpeg", "jpg", "png"] } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
            heroImage: file(relativePath: { eq: "david-iskander-8hFiT80X-6o-unsplash.jpg" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    `);

    /*useEffect(() => {
        new Masonry('.event-card-container', {
            itemSelector: '.event-card',
            columnWidth: '.event-card',
            percentPosition: true,
            gutter: '.event-card-spacer',
            horizontalOrder: true,
            fitwidth: true,
            transitionDuration: '0.1s'
        });
    }, []);*/

    return (
        <Layout>
            <section>
                <div id="events-hero">
                    <GatsbyImage image={getImage(data.heroImage)} alt="" className="hero-bgImage" />
                    <div className="hero-text">
                        <div className='hero-textBG'></div>
                        <h1>Upcoming Events</h1>
                        <p>
                            Come along to our popular events hosted each week.<br />
                            From book readings and signings to high tea to poetry nights and comedy festivals, you're sure to find something that will tickle your fancy.
                        </p>
                    </div>
                </div>
                <div className="event-card-container">
                    {data.allEventsJson.nodes.map(card => {
                        const eventDate = new Date(card.datetime);
                        const dateOptions = { 
                            weekday: 'long',
                            day: '2-digit', 
                            month: 'short',
                            hour: 'numeric', 
                            minute: '2-digit',
                            hour12: true
                        };
                        
                        const formattedDate = new Intl.DateTimeFormat('en-AU', dateOptions).format(eventDate)
                        const imageFile = data.allFile.nodes.find(n => n.relativePath === card.image);
                        return <EventCard key={card.id} event={card} image={getImage(imageFile)} formattedDate={formattedDate} />;
                    })}
                </div>
            </section>
        </Layout>
    );
};

export default EventPage;