import React from "react";
import "./button.scss";
function Button({ props }) {
    return (
        <div className="btn-div">
            <a href="https://github.com/Julu1994/React_Food_Ordering_App" className="card-btn btn-white">
                {props}
            </a>
        </div>
    );
}

export default Button;
