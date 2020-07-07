import React from 'react';
import useToggle from '../../hooks/useToggle';

const Gymtype = ({ inputManage }) => {
  const [toggleGeneral, togglerGeneral] = useToggle(false);
  const [toggleHealth, togglerHealth] = useToggle(false);
  const [toggleCross, togglerCrossfit] = useToggle(false);

  const handleCheckboxChange = (e) => {
    inputManage({ field: e.target.name, value: e.target.checked });
  };
  return (
    <div className="gyms__sidebarContainer">
      <ul className="gyms__list">
        <li
          className={`gyms__list--element ${
            toggleGeneral && 'gyms__list--element--active'
          }`}
        >
          <input
            type="checkbox"
            name="general"
            value="general"
            onClick={handleCheckboxChange}
            id="general"
          />
          <label htmlFor="general" onClick={togglerGeneral}>
            <img
              src={require('../../assets/img/Gym Types/general-gym.jpg')}
              alt="General Gym"
            />
            <span>General Club</span>
          </label>
        </li>
        <li
          className={`gyms__list--element ${
            toggleHealth && 'gyms__list--element--active'
          }`}
        >
          <input
            type="checkbox"
            name="health"
            value="health"
            onClick={handleCheckboxChange}
            id="health"
          />
          <label htmlFor="health" onClick={togglerHealth}>
            <img
              src={require('../../assets/img/Gym Types/health-club.jpg')}
              alt="Health Club"
            />
            <span>Health Club</span>
          </label>
        </li>
        <li
          className={`gyms__list--element ${
            toggleCross && 'gyms__list--element--active'
          }`}
        >
          <input
            type="checkbox"
            name="crossfit"
            value="crossfit"
            id="crossfit"
            onClick={handleCheckboxChange}
          />
          <label htmlFor="crossfit" onClick={togglerCrossfit}>
            <img
              src={require('../../assets/img/Gym Types/cross-fit.jpg')}
              alt="Crossfit Club"
            />
            <span>Crossfit Club</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Gymtype;
