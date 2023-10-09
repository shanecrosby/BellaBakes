// src/pages/orderpage.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MenuItemCardComponent from '../components/MenuItemCard'; // Import MenuItemCard component

const OrderPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMenuItemsJson {
                nodes {
                    id
                    name
                    description
                    image
                    imgalttext
                    price
                    servingSize
                    includeInEstimate
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
            heroImage: file(relativePath: { eq: "tye-doring-yAjERuo85E4-unsplash.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    `);

    return (
        <Layout>
            <section>
                <div id="cateringhero">
                    <h1>Let us cater for you</h1>
                    <GatsbyImage image={getImage(data.heroImage)} alt="Placeholder" className="heroImage" />
                    <p>
                        Here at Bella Bakes, we're delighted to offer you the opportunity to curate a culinary experience that will leave a lasting impression on your guests. Whether you're planning an intimate gathering, a corporate event, or a grand celebration, our catering services are designed to elevate every moment. <br />
                        Explore our delectable selection of pastries, bread, and other sweet and savoury treats, then choose the items that best suit your occasion. Tick the box next to each item and the estimate will be updated automatically. With an estimated guest count of up to 100, we can provide you an instant quote to help turn your vision into reality. <br />
                        The convenience of pre-booking online ensures a hassle-free experience, allowing you to focus on creating beautiful memories while we take care of the delicious details. Let's bring the essence of Bella Bakes to your event, one bite at a time.
                    </p>
                    <div id="estimate">
                        <h3>Instant estimate</h3>
                        <textarea id="estimatebox">$0.00</textarea>
                        <label for="rdoPickup"><input type="radio" id="rdoPickup" name="deliverymethod" value="Pickup" />Pickup</label>
                        <label for="rdoDelivery"><input type="radio" id="rdoDelivery" name="deliverymethod" value="Delivery" />Delivery (Perth Metro Area Only)</label>
                    </div>
                </div>
                <div className="cards">
                    {data.allMenuItemsJson.nodes.map(card => {
                        const imageFile = data.allFile.nodes.find(n => n.relativePath === card.image);
                        return <MenuItemCardComponent key={card.id} menuItem={card} image={getImage(imageFile)} />;
                    })}
                </div>
            </section>
        </Layout>
    );
};

export default OrderPage;