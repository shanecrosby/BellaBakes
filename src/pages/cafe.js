// src/pages/cafe.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        bannerImage: file(relativePath: { eq: "jonathan-borba-_Gd1biLbIU0-unsplash.jpg" }) {
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
                            <p className='intro-p'>
                                Let Bella host your function. From birthday parties to wedding receptions to board meetings, we've got you covered.
                            </p>
                        </div>
                        
                        <div className="body-text">
                            <h1 className="section-header">Facilities for hire</h1>
                            <h2 className="section-subtitle">Function Room</h2>
                            <p className="body-p">

                            </p>
                            <hr />
                            <h2 className="section-subtitle">Café Space</h2>
                            <p className="body-p">
                                
                            </p>
                        </div>

                </section>
        </Layout>
    );
};

export default IndexPage;
