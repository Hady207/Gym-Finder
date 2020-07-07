import React from 'react';

const Gymtype = () => {
  return (
    <div className="gyms__sidebarContainer">
      <ul className="gyms__list">
        <li className="gyms__list--element gyms__list--element--active">
          <img
            src={require('../../assets/img/Gym Types/general-gym.jpg')}
            alt="General Gym"
          />
          <span>General Club</span>
        </li>
        <li className="gyms__list--element">
          <img
            src={require('../../assets/img/Gym Types/health-club.jpg')}
            alt="Health Club"
          />
          <span>Health Club</span>
        </li>
        <li className="gyms__list--element">
          <img
            src={require('../../assets/img/Gym Types/cross-fit.jpg')}
            alt="Crossfit Club"
          />
          <span>Crossfit Club</span>
        </li>
      </ul>
    </div>
  );
};

export default Gymtype;
