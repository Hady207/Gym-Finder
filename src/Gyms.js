import React from "react";
import Nav from "./Nav";
import GymCard from "./Gym Components/GymCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Gyms(props) {
  return (
    <>
      <Nav regular />
      <main className="gyms">
        <div className="gyms__layout">
          <div className="gyms__searchtools">
            <div className="gyms__searchtools--searchbar">
              <input
                type="search"
                placeholder="Search for a gym"
                name=""
                id=""
              />
              <i className="fas fa-search searchIcon"></i>
              {/* <!-- <i className="far fa-times-circle closeIcon"></i> --> */}
            </div>

            <div className="gyms__searchtools--ratings">
              <label for="rating">Rating</label>
              <input type="checkbox" id="rating" name="" value="" />
              <input type="checkbox" id="rating" name="" value="" />
              <input type="checkbox" id="rating" name="" value="" />
              <input type="checkbox" id="rating" name="" value="" />
              <input type="checkbox" id="rating" name="" value="" />
            </div>

            <div className="gyms__searchtools--price">
              <label for="price">Price</label>
              <input type="range" name="" id="price" />
            </div>

            <div className="gyms__searchtools--location">
              <label for="location">Choose a location:</label>
              <select id="location">
                <option selected value="">
                  All
                </option>
                <option value="volvo">Farawniya</option>
                <option value="saab">Hawally</option>
                <option value="mercedes">Salmiya</option>
                <option value="audi">Meshref</option>
              </select>
            </div>

            <div className="gyms__searchtools--gender">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Both</label>
            </div>

            <div className="gyms__searchtools--discounts">
              <label for="discount">Discounts</label>
              <input id="discount" type="checkbox" />
            </div>
          </div>
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
              <Link to="/gyms/:hady">
                <GymCard />
              </Link>
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
