import React from "react";
import ContactForm from './contactForm';
import "./contact.css";
import MapView from "../../components/map/MapView";

export const Contact = () => {

    return (
        <div className="contact-page">
            <h1>Contact with us</h1>
            <ContactForm />
            <div>
                <h2>We are in Street 777, CABA</h2>
                <h3>Come visit us!</h3>
            </div>
            <MapView/>
        </div>
    );
};