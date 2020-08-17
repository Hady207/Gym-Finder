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
  const { _id, review, rate, user, gym, updatedAt } = props.review;
  // const { user } = useContext(UserContext);

  const [isDeleted, setDelete] = useState(false);
  const handleDelete = async () => {
    try {
      await Axios.delete(`/api/v1/reviews/${_id}`);
      setDelete(!isDeleted);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      {/* <!-- Review Box start here --> */}
      <div className="reviews__box">
        <div className="reviews__info">
          <div className="reviews__info--container">
            {user.profileImage && (
              <div className="reviews__info--img">
                <img
                  src={require(`../../assets/img/Profile/${user.profileImage}`)}
                  alt={user.name.firstName}
                />
              </div>
            )}

            <h3 className="reviews__info--name">{`${user.name.firstName} ${user.name.lastName}`}</h3>

            <span className="trash" onClick={handleDelete}>
              <i className="fas fa-trash-alt"></i>
            </span>
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
