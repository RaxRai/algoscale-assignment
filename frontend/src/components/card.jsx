import React from "react";
import "./css/card.css"

export default function Card ({item}){


    return (
        <div className="card-container">
            <div>Name : {item.firstname} {item.lastname}</div>
            <div>Email : {item.email}</div>
            <div>Message : {item.message}</div>
            <div>Date of entry : {item.date.split("T").[0]}</div>
        </div>
    )
}