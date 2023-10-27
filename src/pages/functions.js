// src/pages/functions.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {extension: { in: ["jpeg", "jpg", "png"] } }) {
            nodes {
                relativePath
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
        bannerImage: file(relativePath: { eq: "functionroom.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`);

    return (
        <Layout>
                <section>
                        <GatsbyImage image={getImage(data.bannerImage)} alt="" className="banner-image" />
                        <div className='intro-container'>
                        <h1 className="main-title cover right">Facilities for hire</h1>
                            <p className='intro-p'>
                                Let Bella host your function. From birthday parties to wedding receptions to board meetings, we've got you covered.
                            </p>
                        </div>
                        
                        <div className="body-text">
                            <div className="two-column-container">
                                <div className="column-left">
                                    <h2 className="section-subtitle underline">Function Room</h2>
                                    <p className="body-p">
                                        A spacious multi-function room which can fit up to 200 guests standing, 150 seated in a presentation configuration, or 100 seated at round tables.
                                        Available room facilities include:
                                        <ul>
                                            <li>Built-in sound system with lectern or wireless headset mic.</li>
                                            <li>Multimedia projector with drop-down screen.</li>
                                            <li>10x 10-seat round tables</li>
                                            <li>Catering table setup with hot-water urns, bain-marie, ice-buckets, etc</li>
                                            <li>WiFi guest internet access</li>
                                        </ul>
                                        Hire from $75 per hour - contact us for a full quote.
                                    </p>
                                </div>
                                <div className="column-right">
                                    <h2 className="section-subtitle underline">Café Space</h2>
                                    <p className="body-p">
                                        Our café is available for hire most evenings from 4pm. It can seat up to 50 people in our normal configuration, or tables and chairs can be packed away to allow up to 75 people with standing cocktail tables available upon request.
                                        Available room facilities include:
                                        <ul>
                                            <li>Built-in sound system with wireless microphone</li>
                                            <li>Wall-mounted LCD TVs for presentations</li>
                                            <li>WiFi guest internet access</li>
                                        </ul>
                                        The café can be staffed for drinks service, however this will incur an additional staffing fee.
                                        Hire from $100 per hour - contact us for a full quote.
                                    </p>
                                </div>
                            </div>
                            <div className="one-column-container">
                                <h3 className='serif-header'>Please contact us for a customised quote.</h3>
                                <Link to="/contact" className='button-link'>Get a Quote</Link>
                            </div>
                        </div>

                </section>
        </Layout>
    );
};

export default IndexPage;
