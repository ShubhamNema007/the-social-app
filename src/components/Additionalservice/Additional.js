import React from "react";
import './Additional.scss'

const Additional = (props) => {
    return (
        <div className="additional-cards-content">
            <img src={props.imgadditional} class="card-img css" alt="card-img" />
            <div className="card-padding">
                <h4 className="card-head-additional">
                    {props.additionalhead}
                </h4>
                <p className="additional-cards-para">
                    {props.additionalpara}
                </p>
                <button className="additional-cards-btn">
                    {props.button}
                </button>
            </div>
        </div>
    )
}
export default Additional;