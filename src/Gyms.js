import React from "react";
import Nav from "./Nav";
import GymCard from "./Gym Components/GymCard";
import Searchtools from "./Gyms Components/Searchtools";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Gyms(props) {
  return (
    <>
      <Nav regular />
      <main className="gyms">
        <div className="gyms__layout">
          <Searchtools />
          <div className="gyms__sidebar">
            Gym Types
            <div className="gyms__sidebarContainer">
              <ul className="gyms__list">
                <li className="gyms__list--element gyms__list--element--active">
                  <img
                    src={require("./img/General Gym.jpg")}
                    alt="General Gym"
                  />
                  <span>General Club</span>
                </li>
                <li className="gyms__list--element">
                  <img
                    src={require("./img/Health club.jpg")}
                    alt="Health Club"
                  />
                  <span>Health Club</span>
                </li>
                <li className="gyms__list--element">
                  <img
                    src={require("./img/Cross Fit.jpg")}
                    alt="Crossfit Club"
                  />
                  <span>Crossfit Club</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="gyms__grid">
            grid here
            <div className="gym__innerGrid">
              {/* <!-- card start here --> */}
              <GymCard />
              <GymCard />
              <GymCard />
              <GymCard />
              {/* <!-- card end here --> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Gyms;
