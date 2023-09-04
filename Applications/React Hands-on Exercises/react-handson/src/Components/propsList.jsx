import React from "react";
import '../css/style.css'

const PropsList = (props) => {
    return (
        <div className="card outputDivSmall">
            <div className="card-header">
                RactJS Output Window
            </div>
            <div className="card-body">
            <h5 className="card-title">Product: {props.name}</h5>
                <h5 className="card-title">Price: {props.price}</h5>
                <p className="card-text">Description: {props.description}</p>
            </div>
        </div>
    )
}
export default PropsList;