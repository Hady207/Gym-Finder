import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import useToggle from '../hooks/useToggle';
import { ReactComponent as WeightIcon } from '../assets/icons/weight.svg';
import { ReactComponent as HeartIcon } from '../assets/icons/heartRate.svg';
import { NavLink } from 'react-router-dom';
import ReviewCard from '../Components/Gym Components/ReviewCard';
import DMap from '../Components/Map/dashboardMap';
import { UserContext } from '../Context/userContext';

const Profile = () => {
  const [reviewToggle, changeReviewToggle] = useToggle();
  const { user, token } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);

  console.log(user);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/v1/reviews/myreviews');
        setReviews(response.data.data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <header className="coverHeader">
        <img
          src={require('../assets/img/Profile/general-gym.jpg')}
          alt="cover header"
        />
      </header>

      <main className="profile">
        <div className="profile__grid">
          <div className="profile__sidebar">
            <div className="profile__sidebar--img">
              <img
                src={require(`../assets/img/Profile/${user.profileImage}`)}
                alt="profile"
              />
            </div>
            <h2 className="profile__sidebar--name">
              {user.name.firstName} {user.name.lastName}
            </h2>
            <div className="profile__menu">
              <ul className="profile__ul">
                <li className="profile__li">
                  <NavLink to="/profile/membership" className="profile__link">
                    <i className="fas fa-dumbbell"></i> Gym Finder
                  </NavLink>
                </li>
                {/* <li className="profile__li">
                  <NavLink to="/profile/schedual" className="profile__link">
                    <i className="fas fa-clipboard-list"></i> Workout Schedual
                  </NavLink>
                </li> */}
                <li className="profile__li">
                  <NavLink
                    to="/profile/reviews"
                    className="profile__link"
                    onClick={changeReviewToggle}
                  >
                    <i className="fas fa-pencil-alt"></i> Reviews
                  </NavLink>
                </li>
                {/* <li className="profile__li">
                  <NavLink to="/profile/edit" className="profile__link">
                    <i className="fas fa-user-edit"></i> Edit
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <!-- divider --> */}
          {!reviewToggle && (
            <div className="profile__main">
              <div className="gymbox gymbox__memberships">
                <HeartIcon />
                <p>
                  your height {user.body.height}cm and weight {user.body.weight}{' '}
                  kg
                </p>
              </div>
              <DMap />
              <div className="gymbox gymbox__workoutSchedual">
                <WeightIcon />
                <h1>Today is Chest Day</h1>
                <ul>
                  <li>upper body 3 sets 10 reps</li>
                  <li>upper body 3 sets 10 reps</li>
                  <li>upper body 3 sets 10 reps</li>
                </ul>
              </div>
              <div
                className="gymbox gymbox__reviews"
                onClick={changeReviewToggle}
              >
                <span className="half-circle">{reviews.length}</span>
                <p>you've reviewed {reviews.length} Gyms</p>
              </div>
            </div>
          )}
          {reviewToggle && (
            <div className="review__screen">
              <span className="review__undo" onClick={changeReviewToggle}>
                <i class="fas fa-undo-alt" />
              </span>
              {reviews.map((review) => (
                <ReviewCard author={review.user} ownProfile review={review} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Profile;
