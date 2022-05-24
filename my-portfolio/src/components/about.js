import React from "react";
import "./about.scss";
import { RiCodeBoxFill } from "react-icons/ri";

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
                    call myself a full-stack developer. Here are a few
                    technologies I’ve been working with recently :
                </p>
                <ul className="skill-list">
                    <li className="skill-item">
                        <RiCodeBoxFill className="skill-icon" />
                        JavaScript (ES6)
                    </li>
                    <li className="skill-item">
                        <RiCodeBoxFill className="skill-icon" />
                        NodeJS
                    </li>
                    <li className="skill-item">
                        <RiCodeBoxFill className="skill-icon" />
                        React
                    </li>
                    <li className="skill-item">
                        <RiCodeBoxFill className="skill-icon" />
                        Redux
                    </li>
                    <li className="skill-item">
                        <RiCodeBoxFill className="skill-icon" />
                        Typescript
                    </li>
                    <li className="skill-item">
                        <RiCodeBoxFill className="skill-icon" />
                        AWS
                    </li>
                </ul>
            </div>
            <div className="about-right-side"></div>
        </div>
    );
}

export default About;
