import React from "react";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="nav__icon">
                    <GiHamburgerMenu />
                </div>

                <div className="nav__background"></div>

                <nav className="nav__manue">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#contact-footer" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact-footer" className="nav__link">
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact-footer" className="nav__link">
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact-footer" className="nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Navbar;
