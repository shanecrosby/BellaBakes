import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HomeCardComponent, HomeServiceCardComponent } from '../components/HomeCards'; // Import HomeCard and ServiceCard component
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
                nodes{
                    id
                    title
                    description
                    icon
                }
            }
            allFile(filter: {extension: { in: ["jpeg", "jpg", "png"] } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
            heroImage: file(relativePath: { eq: "nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg" }) {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    `);

    return (
        <Layout>
                <section>
                    <h1>Bella Bakes for you</h1>
                        {/*<Link to="/">#</Link>*/}
                        
                        {/* Hero slideshow */}
                        <GatsbyImage image={getImage(data.heroImage)} alt="Placeholder" className="hero-bgImage" />
                        <section id="goods">
                            <h1>Baked Goods</h1>

                            {/* Content Boxes, number and contents of each defined in associated homeCards.json file */}
                            <div className="cards">
                                {data.allHomeCardsJson.nodes.map(card => {
                                    const imageFile = data.allFile.nodes.find(n => n.relativePath === card.image);
                                    return <HomeCardComponent key={card.id} homecard={card} image={getImage(imageFile)} />;
                                })}
                            </div>

                        </section>

                        <section id="services">
                            <h1>Catering Services</h1>
                            
                            {/* Content Boxes, number and contents of each defined in associated serviceCards.json file */}
                            <div className="cards">
                                {data.allServiceCardsJson.nodes.map(card => {
                                    return <HomeServiceCardComponent key={card.id} servicecard={card} />;
                                })}
                            </div>

                        </section>

                        <section id="newsletter">
                            <h1>Newsletter</h1>
                            <p>Sign up for Bella's weekly newsletter to be updated on our special events.</p>
                            {/* Form - Email text box: Your email, Subscribe */}
                        </section>
                </section>
        </Layout>
    );
};

export default IndexPage;
