import React from "react";
import './Card.css'
// import star from '../images/star.png'
export default function Card(props) {
    return (
        <div className="card">
            <img src={(`../images/${props.img}`)}  className="card--image" />
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