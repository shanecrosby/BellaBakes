// src/pages/about.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutPage = () => {

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
        heroImage: file(relativePath: { eq: "BellaPortraitv2.png" }) {
            childImageSharp {
                gatsbyImageData(height: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
        backgroundImage: file(relativePath: { eq: "miti-qYreP9QOdrk-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`);

    return (
        <Layout>
            <section className='main-container'>
                <GatsbyImage image={getImage(data.backgroundImage)} alt="A border of different kinds of bread on a black background." className="background-image" />
                <div className='page-container'>
                    <h1 className='main-title'>Meet Bella:<br /> A Baker's Journey</h1>
                    <GatsbyImage image={getImage(data.heroImage)} alt="Bella Amato-Farina" className="hero-image" />
                    <div className='bodytext-container'>
                        <p className='paragraph'>
                            Bella, the heart and soul of the bakery and patisserie, is a woman whose life has been a delightful journey through the world of baking and the culinary arts. Her story is a testament to her passion, dedication, and the pursuit of crafting exquisite pastries and breads.</p>
                        <p className='paragraph'>
                            Bella's love affair with baking began in her childhood in the enchanting hills of Tuscany, Italy. As a little girl, she would stand on a stool in her grandmother's kitchen, hands covered in flour, eagerly learning the secrets of traditional Italian baking. The warmth of the oven and the intoxicating aromas of freshly baked bread and sweets left an indelible mark on her heart.</p>
                        <p className='paragraph'>
                            After finishing high school, Bella embarked on a life-changing adventure to France, the epicenter of patisserie excellence. She wandered through quaint patisseries and boulangeries in the charming streets of Paris and immersed herself in the art of creating delicate pastries, perfecting her techniques under the guidance of skilled French bakers. France's culinary culture and the mastery of French pastry chefs ignited her passion even further.</p>
                        <p className='paragraph'>
                            During her travels Bella met her future husband, Mark, who was travelling for work. She ended up relocating to start a new life with him in his home city of Perth in Western Australia. With her heart and mind filled with knowledge and creativity from her adventures, Mark encouraged her to pursue her dream and blend the best of both worlds — French patisserie finesse and Italian baking traditions. Bella's philosophy is simple yet profound: every baked good should not only taste divine but also evoke the warmth of home and the beauty of life's simple pleasures.</p>
                        <p className='paragraph'>
                            At Bella Bakes, Bakery and Patisserie, you'll experience the culmination of Bella's journey; a place where authenticity meets innovation. Each pastry, bread loaf, and sweet treat is crafted with a sprinkle of nostalgia, a dash of creativity, and a whole lot of love. Bella's creations are an embodiment of her passion for bringing people together over the joy of exceptional baked goods.</p>
                        <p className='paragraph'>
                            Bella welcomes you to her bakery, where every bite tells a story, every pastry transports you to far-off places, and every moment is a celebration of life's sweetness.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;