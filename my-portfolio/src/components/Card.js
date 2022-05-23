import React from "react";
import Button from "./sub-components/button";
import "./Card.scss";
import { FaGithub } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";

function Card({ pic, name, title, details }) {
    return (
        <div className="card-container">
            <div className="card-container__body card-container__body--front">
                <div className="card-top">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                    <h2 className="card-heading">{title}</h2>
                </div>
                <img src={pic} alt="toppic" className="card-pic" />
            </div>

            <div className="card-container__body card-container__body--back">
                <div className="back-header">
                    <h2 class Name="app-name">
                        {name}
                    </h2>

                    <h3 className="app-info">{details}</h3>
                </div>
                <div className="back-btn-div">
                    <Button props={<FaGithub />} />
                    <Button props={<GrOverview />} />
                </div>
            </div>
        </div>
    );
}

export default Card;
