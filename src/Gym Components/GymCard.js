import React from "react";
import { Link } from "react-router-dom";
function GymCard(props) {
  return (
    <Link to="/gyms/hello" className="gym__cards">
      <div className="gym__cards--img">
        <img src={require("../img/gym3.jpg")} alt="" />
      </div>
      <h2 className="gym__cards--name">Golds Gym</h2>
      <h6>Gym Type: General Club</h6>
      <div className="gym__cards--rating">
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star-half-alt gym__star--active"></i>
        <div className="gym__rating--desc">
          <span>4.7</span> <span>(2,973 ratings)</span>
          <span>15,776 members</span>
        </div>
      </div>
      <div className="gym__cards--divider"></div>
      <div className="gym__cards--facilities">
        <i className="fas fa-dumbbell"></i>
        <i className="fas fa-hot-tub"></i>
        <i className="fas fa-running"></i>
        <i className="fas fa-swimmer"></i>
        <i className="fas fa-door-closed"></i>
        <i className="fas fa-utensils"></i>
      </div>
    </Link>
  );
}

export default GymCard;
