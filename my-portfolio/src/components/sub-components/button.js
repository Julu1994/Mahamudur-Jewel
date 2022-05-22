import React from "react";
import "./button.scss";
function Button({ props }) {
    return (
        <div className="btn-div">
            <a href="http://localhost:3000/" className="card-btn btn-white">
                {props}
            </a>
        </div>
    );
}

export default Button;
