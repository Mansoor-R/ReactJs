import React from "react";
import '../css/style.css'

const PropObjectDestructuring = ({name, price, description}) => {
    return (
        <div className="divFlexDisplayCenter">
            <div className="card outputDivSmall">
                <div className="card-header">
                    RactJS Output Window
                </div>
                <div className="card-body">
                <h5 className="card-title">Product: {name}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <p className="card-text">Description: {description}</p>
                </div>
            </div>
        </div>
    )
}
export default  PropObjectDestructuring;