import React from "react";
import "./about.scss";
import jewe2 from "./resources/jewel2.png";

function About() {
    return (
        <div className="about-div">
            <div className="about-left-side">
                <h2 className="about-left-header">About Me</h2>
                <p className="about-left-info">
                    I was born and grew up in Bangladesh and it's been a while
                    since I moved to Copenhagen, Denmark. I am lucky enough to
                    realize the mismatch between my passion and academic field
                    before it's getting too late and have the courage to move in
                    the right direction, which leads me to become a full-stack
                    developer. I have experience with building websites and web
                    applications.When I am not at work, I love working out at
                    the gym and feel guilty when I do not follow my fitness
                    routine. I also love traveling, learning about new cultures,
                    meeting new people, and listening to their stories.
                </p>
            </div>
            <div className="about-right-side">
                <img src={jewe2} alt=".." className="about-pic" />
            </div>
        </div>
    );
}

export default About;
