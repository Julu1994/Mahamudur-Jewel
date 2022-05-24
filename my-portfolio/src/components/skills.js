import React from "react";
import "./skills.scss";
import { RiCodeBoxFill } from "react-icons/ri";

function Skills() {
    return (
        <div className="skill-div">
            <div className="skill-div-a">
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
                </ul>
            </div>
            <div className="skill-div-b">
                <ul>
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
        </div>
    );
}
export default Skills;
