import React from "react";
import "./Contact.css"
export default function  Contact(props){
    // console.log(props.img);
    return(
        <div className="contact-card">
            <img src={props.img}  />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require("../images/phone-icon.png")}  />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={require("../images/mail-icon.png")}  />
                <p>{props.email}</p>
            </div>
        </div>
    )
}