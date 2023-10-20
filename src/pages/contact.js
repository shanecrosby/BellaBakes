// src/pages/contact.js
import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import ContactForm from '../components/ContactForm'; //contact form component

const ContactPage = () => {
    return (
        <Layout>
            <section>
                <h1 className='section-heading'>We'd love to hear from you!</h1>
                <div className="form-container">
                    <div className="contact-form-card"><ContactForm /></div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;