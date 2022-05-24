import React from "react";
import "./about.scss";

function About() {
    return (
        <div className="about-div">
            <div className="about-header">
                <h2 className="about-header-text">About Me</h2>
            </div>
            <div className="about-left-content">
                <p className="about-left-info">
                    Hi! My name is Mahamudur Rahman Jewel and I love creating
                    things that live on the internet. My interest in programming
                    started back in 2019 when I decided to explore how a webpage
                    workes, which leads me to get myself admitted into a online
                    course on Python. Since then I stared to switch my careed
                    path to programming from business administration which is my
                    academic field. Now I have enough experience and skillls to
                    call myself a full-stack developer.
                </p>
            </div>
            <div className="about-right-side"></div>
        </div>
    );
}

export default About;
