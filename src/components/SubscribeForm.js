// src/components/SubscribeForm.js
import React, { useState } from 'react';
import './css/inputforms.css';

const FormComponent = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //todo: save formData to a JSON file for later use.
        console.log("Form submitted:", formData);
};

    return (
        <form className="subscribe-form" onSubmit={handleSubmit}>
        <div className="form-name">
            <input
            type="text"
            placeholder="Full name"
            className="form-input form-name"
            name="name"
            maxLength="32"
            id="form-name"
            required
            aria-required="true"
            value={formData.name}
            onChange={handleChange}
            />
        </div>
        <div className="form-email">
            <input
            type="email"
            placeholder="e-mail address"
            className="form-input form-email"
            name="email"
            maxLength="32"
            id="form-email"
            required
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <button type="submit" className="button-link">Subscribe</button>
        </form>
    );
};

export default FormComponent;