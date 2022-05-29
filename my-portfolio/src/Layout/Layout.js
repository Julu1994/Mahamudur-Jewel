import React from "react";
import "./layout.scss";
import Header from "../components/header";
import Card from "../components/Card";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/Contact";
import Navbar from "../components/navbar";
import notePic from "../components/resources/stikynote1.webp";
import ecommarce from "../components/resources/ecommarceapp.png";
import fooddelivery from "../components/resources/foodordering2.png";
import countrylist from "../components/resources/countrylist.jpg";
import portfolio from "../components/resources/portfolio.avif";
import game from "../components/resources/simongame.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Layout() {
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
                <div className="funny-copyright"></div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320">
                        <path
                            fill="#5001ac"
                            fillOpacity="0.7"
                            d="M0,96L26.7,128C53.3,160,107,224,160,218.7C213.3,213,267,139,320,138.7C373.3,139,427,213,480,245.3C533.3,277,587,267,640,250.7C693.3,235,747,213,800,176C853.3,139,907,85,960,101.3C1013.3,117,1067,203,1120,250.7C1173.3,299,1227,309,1280,282.7C1333.3,256,1387,192,1413,160L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    </svg>
                </div>
            </section>
        </div>
    );
}

export default Layout;
