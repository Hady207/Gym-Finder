import React, { useReducer } from "react";
import Nav from "./Nav";
import GymCard from "./Gym Components/GymCard";
import Searchtools from "./Gyms Components/Searchtools";
import Gymtype from "./Gyms Components/Gymtype";
import Footer from "./Footer";

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
  const reducer = (state, action) => {
    return {
      ...state,
      [action.field]: action.value,
    };
  };
  const [state, dispatch] = useReducer(reducer, initVal);
  console.log(state);
  return (
    <>
      <Nav regular />
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
      <Footer />
    </>
  );
};

export default Gyms;
