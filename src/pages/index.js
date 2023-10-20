import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HomeCardComponent, HomeServiceCardComponent } from '../components/HomeCards'; // Import HomeCard and ServiceCard component
import FormComponent from '../components/SubscribeForm';
//import { Link } from "gatsby"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allHomeCardsJson {
            nodes {
                id
                title
                description
                image
                imgalttext
            }
        }
        allServiceCardsJson {
            nodes {
                id
                title
                description
                image
                imgalttext
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
        heroImage: file(relativePath: { eq: "nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
        bannerImage: file(relativePath: { eq: "yeh-xintong-go3DT3PpIw4-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`);

    return (
        <Layout>
                <section>
                        <div className='hero'>
                            {/* Hero slideshow */}
                            <GatsbyImage image={getImage(data.heroImage)} alt="" className="hero-mainImage" />
                            <h1 className='main-heading'>Bella Bakes for you</h1>
                        </div>
                        <div className='intro-container'>
                                <p className='intro-p'>Bella Bakes is your cozy neighborhood bakery and patisserie known for our delectable pastries and fresh bread. Bella lovingly crafts treats that warm the heart and delight the taste buds.</p>
                        </div>
                        <section id="goods">
                            <h1 className='section-heading'>Baked Goods</h1>
                            <hr />

                            {/* Content Boxes, number and contents of each defined in associated homeCards.json file */}
                            <div className="cards">
                                {data.allHomeCardsJson.nodes.map(card => {
                                    const imageFile = data.allFile.nodes.find(n => n.relativePath === card.image);
                                    console.log("HomeCard Image File:", imageFile); // Debugging Line
                                    return <HomeCardComponent key={card.id} homecard={card} image={getImage(imageFile)} />;
                                })}
                            </div>
                        </section>

                        <section id="services">
                            <GatsbyImage image={getImage(data.bannerImage)} alt="" className="banner-image" />
                            <h1 className='section-heading'>Catering Services</h1>
                            <hr />
                            
                            {/* Content Boxes, number and contents of each defined in associated serviceCards.json file */}
                            <div className="cards">
                                {data.allServiceCardsJson.nodes.map(card => {
                                    const imageFile = data.allFile.nodes.find(n => n.relativePath === card.image);
                                    console.log("ServiceCard Image File:", imageFile); // Debugging Line
                                    return <HomeServiceCardComponent key={card.id} servicecard={card} image={getImage(imageFile)} />;
                                })}
                            </div>
                        </section>

                        <section id="newsletter">
                            <h1 className='section-heading'>Newsletter</h1>
                            <hr />
                            <div className="form-container">
                                <div className="subscribe-form-card">
                                    <p className="intro-p left">Sign up for Bella's weekly newsletter to be updated on our special events.</p>
                                    <div className="formComponent right"><FormComponent /></div>
                                </div>
                            </div>
                        </section>
                </section>
        </Layout>
    );
};

export default IndexPage;
