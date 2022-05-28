import React from "react";
import Button from "./sub-components/button";
import "./Card.scss";
import { FaGithub } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";

function Card({ pic, title, details }) {
    return (
        <div className="card-container">
            <div className="card-container__body card-container__body--front">
                <div className="card-top">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                </div>
                <img src={pic} alt="toppic" className="card-pic" />
                <h2 className="card-heading">{title}</h2>
            </div>

            <div className="card-container__body card-container__body--back">
                <div className="back-header">
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
