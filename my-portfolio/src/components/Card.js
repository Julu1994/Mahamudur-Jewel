import React from "react";
import "./Card.scss";

function Card({ pic, name, title, details }) {
    return (
        <div className="card-box">
            <div className="card-box__A card-box__A--front">
                <div className="card-top">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                    <h2 className="card-heading">{title}</h2>
                </div>
                <img src={pic} alt="toppic" className="card-pic" />
                <p>{details}</p>
            </div>

            <div className="card-box__A card-box__A--back"></div>
        </div>
    );
}

export default Card;
