import React, { useContext, useState } from 'react';
import moment from 'moment';
import { UserContext } from '../../Context/userContext';
import Axios from 'axios';
const stars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fas fa-star gym__star--active"></i>);
  }
  return stars;
};

function ReviewCard(props) {
  // const { author, profile, rating, text, gym, date, userId, reviewId } = props;
  const { _id, review, rate, gym, updatedAt, reRender } = props.review;

  const { user } = useContext(UserContext);

  const handleDelete = async () => {
    try {
      await Axios.delete(`/api/v1/reviews/${_id}`);
      alert('your review has been deleted');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // console.log(user);

  return (
    <>
      {/* <!-- Review Box start here --> */}
      <div className="reviews__box">
        <div className="reviews__info">
          <div className="reviews__info--container">
            {!props.ownProfile && props.author.profileImage && (
              <div className="reviews__info--img">
                <img
                  src={require(`../../assets/img/Profile/${props.author.profileImage}`)}
                  alt={props.author.name.firstName}
                />
              </div>
            )}

            <h3 className="reviews__info--name">{`${props.author.name.firstName} ${props.author.name.lastName}`}</h3>
            {!props.ownProfile && user && user.id === props.author.id && (
              <span className="trash" onClick={handleDelete}>
                <i className="fas fa-trash-alt"></i>
              </span>
            )}
          </div>

          <div className="reviews__info--rating">
            <span className="review--stars">{stars(rate)}</span>
            <div className="date-gym">
              {/* <span className="review--gym">{gym}</span> */}
              <span className="review--date">
                {moment(updatedAt).fromNow()}
              </span>
            </div>
          </div>
        </div>

        <div className="reviews__text">
          <p>{review}</p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
