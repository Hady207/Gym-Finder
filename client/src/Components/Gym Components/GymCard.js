import React from 'react';
import { Link } from 'react-router-dom';

const stars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fas fa-star gym__star--active"></i>);
  }
  return stars;
};

function GymCard({ data }) {
  return (
    <Link to="/gyms/hello" className="gym__cards">
      <div className="gym__cards--img">
        <img
          src={require(`../../assets/img/Gyms/${data.slug}/${data.headerImage}`)}
          alt={data.gymName}
        />
      </div>
      <h2 className="gym__cards--name">{data.gymName}</h2>
      <h6>
        Gym Type:{' '}
        {data.gymType.map((i) => (
          <span style={{ marginRight: 4 }}>{i}</span>
        ))}
      </h6>
      <div className="gym__cards--rating">
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star-half-alt gym__star--active"></i>
        <div className="gym__rating--desc">
          <span>4.7</span> <span>({data.ratingsQuantity} ratings)</span>
          <span>15,776 members</span>
        </div>
      </div>
      <div className="gym__cards--divider"></div>
      <div className="gym__cards--facilities">
        {data.facilities.map((f) => (
          <i className={`fas fa-${f}`} />
        ))}
        {/* <i className="fas fa-dumbbell"></i>
        <i className="fas fa-hot-tub"></i>
        <i className="fas fa-running"></i>
        <i className="fas fa-swimmer"></i>
         <i className="fas fa-door-closed"></i> 
        <i className="fas fa-utensils"></i> */}
      </div>
    </Link>
  );
}

export default GymCard;
