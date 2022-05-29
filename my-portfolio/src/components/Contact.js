import React from "react";
import "./Contact.scss";
import { MdAttachEmail } from "react-icons/md";

function Contact() {
    return (
        <div className="contact-div">
            <div className="contact-icon">
                <MdAttachEmail />
            </div>
            <h2 className="contact-header">
                Wanna team up? My inbox is always open, lets talk...
            </h2>
            <h3 className="contact-header">mrjewel837@gmail.com</h3>
        </div>
    );
}
export default Contact;
