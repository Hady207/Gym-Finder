import React from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import useInputReducer from "../hooks/useInputReducer";
import GymCard from "../Components/Gym Components/GymCard";
import Searchtools from "../Components/Gyms Components/Searchtools";
import Gymtype from "../Components/Gyms Components/Gymtype";

const Gyms = (props) => {
  const initVal = {
    // search
    search: "",
    // rating
    rating: 3,
    // price
    price: 30,
    // location
    location: "",
    // gender
    gender: "M",
    // discounts
    discounts: false,
    // type
    type: "",
  };
  const [state, dispatch] = useInputReducer(initVal);
  return (
    <>
      <main className="gyms">
        <div className="gyms__layout">
          <Searchtools inputManage={dispatch} />
          <div className="gyms__sidebar">
            {/* Gym Types */}
            <Gymtype />
          </div>
          <div className="gyms__grid">
            {/* grid here */}
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
    </>
  );
};

export default Gyms;
