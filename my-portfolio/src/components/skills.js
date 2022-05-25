import React from "react";
import "./skills.scss";

function Skills() {
    return (
        <div className="skill-div">
            <div className="skill-heading">
                <h1 className="skill-heading-text1">
                    Here are a few technologies I’ve been working with recently
                    :
                </h1>
            </div>
            <div className="skill-div-a">
                <div className="logo js"></div>
                <div className="logo mongodb"></div>
                <div className="logo node"></div>
                <div className="logo react"></div>
                <div className="logo aws"></div>
                <div className="logo ts"></div>
            </div>
        </div>
    );
}
export default Skills;
