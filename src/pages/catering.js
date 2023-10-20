// src/pages/orderpage.js
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'; // Import the layout component
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MenuItemCardComponent from '../components/MenuItemCard'; // Import MenuItemCard component
import { format } from 'date-fns';
import { DayPicker} from 'react-day-picker';
import 'react-day-picker/src/style.css';
//import { es } from 'date-fns/locale';

const OrderPage = () => {
    const [selectedItems, setSelectedItems] = useState(0);
    const [estimatedCost, setEstimatedCost] = useState(0);
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);

    const data = useStaticQuery(graphql`
        query {
            allMenuItemsJson {
                nodes {
                    itemID
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
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    `);
    
    const updateSelectedItems = (itemID, isChecked) => {
        setSelectedItems(prevSelectedItems => {
            if (isChecked) {
                return { ...prevSelectedItems, [itemID]: 1 };
            } else {
                const updatedItems = { ...prevSelectedItems };
                delete updatedItems[itemID];
                //console.log("updateSelectedItems: updatedItems", updatedItems);
                return updatedItems;
            }
        });
    };

    const handleGuestChange = (e) => {
        const numberOfGuests = e.target.value;
        setNumberOfGuests(numberOfGuests);
        console.log("handleGuestChange: numberOfGuests:", numberOfGuests)
    };

    // Calculate the estimated cost
    const recalculateCost = () => {
        //console.log("All Items:", data.allMenuItemsJson.nodes);
        let newEstimate = 0;
        
        Object.keys(selectedItems).forEach(itemID => {
            const item = data.allMenuItemsJson.nodes.find(node => {
                //console.log(`Comparing ${node.itemID} with ${itemID}`);
                return node.itemID == itemID;
            });
            if (item) {
                newEstimate += (item.price * numberOfGuests) / item.servingSize;
                //console.log("itemID:",itemID,"item price:",item.price,"Serving Size",item.servingSize,"Estimate:",newEstimate);
            } else {
                console.log(`Item not found for ID: ${itemID}`);
            }
        });

        newEstimate += deliveryCost;
        setEstimatedCost((newEstimate / 100).toFixed(2));
        console.log("recalculateCost: newEstimate:", newEstimate)
    }

    useEffect(() => {
        recalculateCost();
    }, [selectedItems, numberOfGuests, deliveryCost])
    
    const [selected, setSelected] = React.useState(null);
    let footer = <p>Please select a date for your event.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    };

    // This is the easiest way to change the formatting of the calendar
    const css = `
        .my-selected:not([disabled]) { 
            font-weight: bold;
            background-color: var(--yellow);
        }
        .my-selected:hover:not([disabled]) { 
            border-color: var(--primary-blue);
            color: var(--primary-blue);
            background-color: var(--yellow-transparent);
        }
        .my-today { 
            font-weight: bold;
            font-size: 140%; 
            color: var(--primary-blue);
        }
    `;

    return (
        <Layout>
            <section>
                <div className="catering-hero">
                    <GatsbyImage image={getImage(data.heroImage)} alt="" className="intro-image" />
                    <div className="intro-text">
                        <h1>Let us cater for you</h1>
                        <p>
                            Here at Bella Bakes, we're delighted to offer you the opportunity to curate a culinary experience that will leave a lasting impression on your guests. Whether you're planning an intimate gathering, a corporate event, or a grand celebration, our catering services are designed to elevate every moment. <br />
                            Explore our delectable selection of pastries, bread, and other sweet and savoury treats, then choose the items that best suit your occasion. Tick the box next to each item and the estimate will be updated automatically. With an estimated guest count of up to 100, we can provide you an instant quote to help turn your vision into reality. <br />
                            The convenience of pre-booking online ensures a hassle-free experience, allowing you to focus on creating beautiful memories while we take care of the delicious details. Let's bring the essence of Bella Bakes to your event, one bite at a time.
                        </p>
                        <div className="estimate-container">
                            <h3 className='section-title'>Instant estimate</h3>
                            <div className='estimate-elements'>
                                <textarea id="estimate" className="textarea" value={`$${estimatedCost}`} disabled />
                                <div className='radiobuttons-container'>
                                    <label htmlFor="rdoPickup" className='radio-buttons'>
                                        <input 
                                            type="radio" id="rdoPickup" 
                                            name="deliverymethod" value="Pickup" 
                                            className="checkbox"
                                            onChange={() => setDeliveryCost(0)}
                                            checked={deliveryCost === 0}
                                        /><span className='checkmark'></span>Pickup</label>
                                    <label htmlFor="rdoDelivery" className='radio-buttons'>
                                        <input 
                                            type="radio" id="rdoDelivery" 
                                            name="deliverymethod" value="Delivery" 
                                            className="checkbox"
                                            onChange={() => setDeliveryCost(800)}
                                            checked={deliveryCost === 800}
                                        /><span className='checkmark'></span>Delivery (Perth Metro Area Only)</label>
                                </div>
                            </div>
                            <p id="estimate-warning" className={numberOfGuests ? 'hidden' : ''}>Please specify number of guests.</p>
                        </div>
                    </div>
                    <div className='calendar-container'>
                        <h3 className='calendar-title'>Event date</h3>
                        <style>{css}</style>
                        <DayPicker 
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                            modifiersStyles={{
                                disabled: { fontSize: '75%' }
                            }}
                        />
                        <div className='guest-form'>
                            <h3 className='calendar-title'>Number of Guests</h3>
                            <textarea 
                                id='guests' 
                                className='textarea' 
                                placeholder='Estimated number of guests (max 100)'
                                onChange={handleGuestChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="menuItem-card-container">
                    {data.allMenuItemsJson.nodes.map(card => {
                        const imageFile = data.allFile.nodes.find(n => n.relativePath === card.image);
                        return <MenuItemCardComponent key={card.itemID} menuItem={card} image={getImage(imageFile)} updateSelectedItems={updateSelectedItems} recalculateCost={recalculateCost} />;
                    })}                    
                </div>
            </section>
        </Layout>
    );
};

export default OrderPage;