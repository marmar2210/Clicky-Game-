import React from "react";
import "./style.css";

function ParrotCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      
    <img alt={props.name} src={props.image} id={props.id} onClick={() => props.shuffle(props.id)} className="clicked"/>
      
    </div>
    </div>
  );
}

export default ParrotCard;
