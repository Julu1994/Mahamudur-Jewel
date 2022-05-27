import React, { useState } from "react";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";

function Navbar() {
    const [nabvarr, setNavbar] = useState(false);
    const showNavabr = () => setNavbar(!nabvarr);
    return (
        <>
            <div className="nav">
                <div className="nav__icon">
                    {nabvarr ? (
                        <TiDelete
                            className="nav__icon__sign"
                            onClick={showNavabr}
                        />
                    ) : (
                        <GiHamburgerMenu
                            className="nav__icon__sign"
                            onClick={showNavabr}
                        />
                    )}
                </div>

                {nabvarr ? (
                    <div className="h&s">
                        <div className="nav__background"></div>

                        <nav className="nav__manue">
                            <ul className="nav__list" onClick={showNavabr}>
                                <li className="nav__item">
                                    <a
                                        href="#contact-footer"
                                        className="nav__link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#contact-footer"
                                        className="nav__link">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#contact-footer"
                                        className="nav__link">
                                        About
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#contact-footer"
                                        className="nav__link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ) : (
                    <div> </div>
                )}
            </div>
        </>
    );
}
export default Navbar;
