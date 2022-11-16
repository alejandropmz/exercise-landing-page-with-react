import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
  <img src={props.cardImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>{props.cardTitle}</strong></h5>
    <p className="card-text">{props.cardText}</p>
    <a href={props.buttonUrl} target="_blank" className="btn btn-info">More here</a>
  </div>
</div>
    )
}

export default Card