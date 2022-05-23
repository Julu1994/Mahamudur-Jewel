import React from "react";
import "./layout.scss";
import Header from "../components/header";
import Card from "../components/Card";
import About from "../components/about";
import notePic from "../components/resources/noteIMG.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Layout() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="layout-div">
            <Header />
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
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="card-grid">
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
}

export default Layout;
