import React from "react";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-div">
            <div className="contact-info">
                <div className="contact-email">
                    <div className="contact-header">
                        <span>G</span>
                        <span>e</span>
                        <span>t </span>
                        <span className="wave"></span>
                        <span>I</span>
                        <span>n</span>
                        <span className="wave"></span>
                        <span>T</span>
                        <span>o</span>
                        <span>u</span>
                        <span>c</span>
                        <span>h</span>
                    </div>
                    <p className="contact-para">
                        Wanna team up ? My inbox is always open, let's talk..{" "}
                    </p>
                    <h3 className="my-mail">mrjewel837@gmail.com</h3>
                </div>
            </div>
        </div>
    );
}
export default Contact;
