// src/pages/cafe.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MenuEntryComponent } from '../components/MenuEntry'

const CafePage = () => {
    const data = useStaticQuery(graphql`
        query {
            allDataJson {
                nodes {
                    Menu{
                        Food {
                            Bakery_Items {
                                name
                                description
                                price
                            }
                            Patisserie_Specials  {
                                name
                                description
                                price
                            }
                            Cafe_Classics  {
                                name
                                description
                                price
                            }
                        }
                        Drinks {
                            Hot_Drinks  {
                                name
                                description
                                price
                            }
                            Cold_Drinks  {
                                name
                                description
                                price
                            }
                        }
                    }
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
            bannerImage: file(relativePath: { eq: "cafe-interior.webp" }) {
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
                                Come and enjoy our world-class coffee made by our friendly baristas, while tasting some of Bella's freshly baked goods.
                            </p>
                        </div>
                        <div className="section-container">
                            <div className="section-subtitle"><h1>Menu</h1></div>
                            <div className="menu-container">
                                {Object.keys(data.allDataJson.nodes[0].Menu).map(menuCategory => {
                                    return (
                                        <div key={menuCategory} className="menu-category">
                                            <h2 className='menu-category-title plaid'><div className='transparent-overlay'>{menuCategory}</div></h2>
                                            {Object.keys(data.allDataJson.nodes[0].Menu[menuCategory]).map(sectionTitle => {
                                                return (
                                                    <MenuEntryComponent
                                                        key={sectionTitle}
                                                        sectionTitle={sectionTitle.replace(/_/g, " ")}
                                                        items={data.allDataJson.nodes[0].Menu[menuCategory][sectionTitle]}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                </section>
        </Layout>
    );
};

export default CafePage;