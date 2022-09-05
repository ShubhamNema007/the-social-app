import React from "react";
import './Cards.scss'

const Cards = (props) => {
    return (
        <div className="card-content">
            <img src={props.imgcard} class="card-img" alt="card-image" />
            <h4 className="card-head">
                {props.cardheading}
            </h4>
            <p className="card-para">
                {props.cardpara}
            </p>
        </div>
    )
}
export default Cards;