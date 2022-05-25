import React from "react";
import "./footer.scss";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

function Footer() {
    return (
        <div className="footer">
            <div className="footer2 delay0">
                <AiFillLinkedin />
            </div>
            <div className=" footer2 delay1">
                {" "}
                <AiFillGithub />
            </div>
            <div className=" footer2 delay2">
                {" "}
                <AiFillFacebook />
            </div>
        </div>
    );
}

export default Footer;
