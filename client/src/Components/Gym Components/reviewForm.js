import React, { useEffect, useState, useCallback, useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import { UserContext } from '../../Context/userContext';
import { useLocation } from 'react-router-dom';

// import useToggle from "./hooks/useToggle";

// const [open, setOpen] = useToggle(true);
const ReviewForm = (props) => {
  const { open, setOpen, gymId, user, reRender } = props;
  // const { user, token } = useContext(UserContext);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState('');
  const ratingChanged = useCallback((newRating) => {
    setRate(newRating);
  });

  // TODO: Trigger Rerender
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    try {
      const postedReview = await axios.post(`/api/v1/gyms/${gymId}/review/`, {
        review,
        rate,
      });
      setReview('');
      setOpen(false);
      reRender();
    } catch (error) {
      alert(error.response.data.message);
      setOpen(false);
    }
  };

  return (
    <div
      className={`review__form ${
        open ? 'review__form--show' : 'review__form--hide'
      }`}
    >
      <span onClick={setOpen} className="crossIcon">
        <i className="far fa-times-circle"></i>
      </span>
      {user && (
        <form onSubmit={handleReviewSubmit} className="review__card">
          <div className="reviews__box">
            <div className="reviews__info">
              <div className="reviews__info--container">
                <div className="reviews__info--img">
                  <img
                    src={require(`../../assets/img/Profile/${user.profileImage}`)}
                    alt={user.name.firstName}
                  />
                </div>
                <h3 className="reviews__info--name">
                  {user.name.firstName + ' ' + user.name.lastName}
                </h3>
              </div>

              <div className="reviews__info--rating">
                <ReactStars
                  count={5}
                  value={rate}
                  onChange={ratingChanged}
                  size={27}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <span>{rate}/5</span>
              </div>
            </div>

            <div className="reviewText__form">
              <textarea
                name="reviewText"
                id=""
                onChange={(e) => setReview(e.target.value)}
                value={review}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="button reviews__button reviews__button--submit"
          >
            <i className="fas fa-pen-square"></i> <span>Submit</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default React.memo(ReviewForm);
