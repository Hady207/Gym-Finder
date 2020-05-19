import React from "react";
import { ReactComponent as WeightIcon } from "./img/icons/weight.svg";

import { NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <header className="coverHeader">
        <img
          src={require("./img/Profile/general-gym.jpg")}
          alt="cover header"
        />
      </header>

      <main className="profile">
        <div className="profile__grid">
          <div className="profile__sidebar">
            <div className="profile__sidebar--img">
              <img src={require("./img/Profile/default.jpg")} alt="profile" />
            </div>
            <h2 className="profile__sidebar--name">Hadi Maher</h2>
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
                  <NavLink to="/profile/reviews" className="profile__link">
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
          <div className="profile__main">
            <div className="gymbox gymbox__memberships">
              <img src={require("./img/logo.png")} alt="Gym Name" />
              <p>your membership expires in 30 days</p>
            </div>
            <div className="gymbox gymbox__workoutSchedual">
              <WeightIcon />
              {/* <!-- Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> --> */}
              <h1>Today is Chest Day</h1>
              <ul>
                <li>upper body 3 sets 10 reps</li>
                <li>upper body 3 sets 10 reps</li>
                <li>upper body 3 sets 10 reps</li>
              </ul>
            </div>
            <div className="gymbox gymbox__reviews">
              <span className="half-circle">25</span>
              <p>you've reviewed 25 Gyms</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
