import React from "react";
import "./layout.scss";
import Header from "../components/header";
import Card from "../components/Card";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/Contact";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import notePic from "../components/resources/stikynote1.webp";
import ecommarce from "../components/resources/ecommarceapp.png";
import fooddelivery from "../components/resources/foodordering2.png";
import countrylist from "../components/resources/countrylist.jpg";
import portfolio from "../components/resources/portfolio.avif";
import game from "../components/resources/simongame.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Layoutt() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="layout-div">
            {/* Header Section*/}
            <section id="Header-Section">
                <Navbar />
                <Header />
            </section>

            {/* Portfolio Projects Section */}
            <section id="Project-Section" className="section bg-color1">
                <div className="grid-container">
                    {/* Project Header */}
                    <div className="card-grid-header">
                        <h2
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            className="card-grid-header-text">
                            MY PROJECTS
                        </h2>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="2000"
                            className="grid-header-bar"></div>
                    </div>

                    {/* Projects */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-delay="200"
                        className="card-grid">
                        <Card
                            title="STICKY NOTES"
                            pic={notePic}
                            details="It's a full-stack project, using Nodejs and Express in the backend, 
                        MongoDB as database, and React on the front-end "
                        />
                        <Card
                            title="E-COMMARCE APP"
                            pic={ecommarce}
                            details="It's frontend application, using React and Redux. "
                        />
                        <Card
                            title="FOOD DELIVERY APP"
                            pic={fooddelivery}
                            details=" Its a fontend appplication, using React, Redux and MongoDB as database."
                        />
                        <Card
                            title="COUNTRY LIST"
                            pic={countrylist}
                            details=" Its a fontend application using React and Redux"
                        />
                        <Card
                            title="PORTFOLIO WEBPAGE"
                            pic={portfolio}
                            details="Its a portfolio webpage using React and Sass"
                        />
                        <Card
                            title="SIMON GAME"
                            pic={game}
                            details=" Its the classic Simon game, using Javascript and CSS"
                        />
                    </div>
                </div>
            </section>

            {/* About Me Section*/}
            <section id="About-Me" className="section bg-colo2">
                {/* About Me Header */}
                <div className="card-grid-header">
                    <h2
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        className="card-grid-header-text">
                        About Me
                    </h2>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        className="grid-header-bar"></div>
                </div>

                {/* About */}
                <div data-aos="slide-right" data-aos-duration="3000">
                    <About />
                </div>
            </section>

            {/* Skill Section */}
            <section id="My-Skill" className="section bg-color1">
                {/* Skill Header */}
                <div className="card-grid-header">
                    <h2
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        className="card-grid-header-text">
                        Skills & Tools
                    </h2>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        className="grid-header-bar"></div>
                </div>

                {/* Skills */}
                <div className="skill-sec">
                    <Skills />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact-footer" className="section">
                {/* Contact Header */}
                <div className="card-grid-header">
                    <h2
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        className="card-grid-header-text">
                        Get In Touch
                    </h2>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        className="grid-header-bar"></div>
                </div>

                {/* Contact */}
                <div>
                    <Contact />
                </div>
            </section>

            {/* Copyright  */}
            <section className="copyright">
                <div>
                    <Footer />
                </div>
            </section>
        </div>
    );
}

export default Layout;
