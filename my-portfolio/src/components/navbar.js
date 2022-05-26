import React from "react";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <button>
                    <GiHamburgerMenu />
                </button>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <a href="#contact-footer"> contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;
