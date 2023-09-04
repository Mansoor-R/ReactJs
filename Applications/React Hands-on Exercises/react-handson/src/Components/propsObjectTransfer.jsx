import React from "react";
import '../css/style.css'

const PropsObjectTransfer = (props) => {
    return (
        <div className="divFlexDisplayCenter">
            <div className="card outputDivSmall">
                <div className="card-header">
                    RactJS Output Window
                </div>
                <div className="card-body">
                <h5 className="card-title">Product: {props.item.name}</h5>
                    <h5 className="card-title">Price: {props.item.price}</h5>
                    <p className="card-text">Description: {props.item.description}</p>
                </div>
            </div>
        </div>
    ); 
}
export default PropsObjectTransfer;