import React, { useContext } from 'react';

import useToggle from '../hooks/useToggle';
import { ReactComponent as WeightIcon } from '../assets/icons/weight.svg';
import { NavLink } from 'react-router-dom';
import ReviewCard from '../Components/Gym Components/ReviewCard';
import { UserContext } from '../Context/userContext';

const Profile = () => {
  const [reviewToggle, changeReviewToggle] = useToggle();
  const { user, token } = useContext(UserContext);

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
                src={require('../assets/img/Profile/default.jpg')}
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
                    <i className="fas fa-dumbbell"></i> Gym Membership
                  </NavLink>
                </li>
                <li className="profile__li">
                  <NavLink to="/profile/schedual" className="profile__link">
                    <i className="fas fa-clipboard-list"></i> Workout Schedual
                  </NavLink>
                </li>
                <li className="profile__li">
                  <NavLink
                    to="/profile/reviews"
                    className="profile__link"
                    onClick={changeReviewToggle}
                  >
                    <i className="fas fa-pencil-alt"></i> Reviews
                  </NavLink>
                </li>
                <li className="profile__li">
                  <NavLink to="/profile/edit" className="profile__link">
                    <i className="fas fa-user-edit"></i> Edit
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- divider --> */}
          {!reviewToggle && (
            <div className="profile__main">
              <div className="gymbox gymbox__memberships">
                <img src={require('../assets/img/logo.png')} alt="Gym Name" />
                <p>your membership expires in 30 days</p>
              </div>
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
                <span className="half-circle">25</span>
                <p>you've reviewed 25 Gyms</p>
              </div>
            </div>
          )}
          {reviewToggle && (
            <div className="review__screen">
              <span className="review__undo" onClick={changeReviewToggle}>
                <i class="fas fa-undo-alt" />
              </span>
              <ReviewCard
                author="Hadi Maher"
                text="hello World"
                rating={4}
                gym="Golds Gym"
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Profile;
