import React from "react";
import './Card.css'
// import star from '../images/star.png'
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={(`../images/${props.coverImg}`)}  className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span style={{marginRight:"5px"}}>{props.rating}</span>
                <span className="gray" style={{marginRight:"5px"}}>  ({props.reviewCount}) • </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}