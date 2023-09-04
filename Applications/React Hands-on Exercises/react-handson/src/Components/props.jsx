import React from "react";
import '../css/style.css';

const Props = (props) => {
    return (
        <div className="card outputDivSmall">
            <div className="card-header">
                RactJS Output Window
            </div>
            <div className="card-body">
                <h5 className="card-title">Props in ReactJS</h5>
                <p className="card-text">This exercise is an example of {props.name}</p>
            </div>
        </div>
    )
}
export default Props;