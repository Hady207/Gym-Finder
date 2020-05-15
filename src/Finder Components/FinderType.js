import React from "react";

const FinderType = () => {
  return (
    <div className="finder__q1">
      <h1 className="finder__title">Choose the Gym</h1>
      {/* Here is the first choice */}
      <div className="finder__typeofworkout finder__typeofworkout--crossfit">
        <img src={require("../img/widget/cross-fit-gym.jpg")} alt="Cross Fit" />
        <h4 className="choice__description choice__description--crossfit">
          <span className="choice__description--span crossfit__description--span-1">
            Cross Fit Gym
          </span>
          <span classname="choice__description--span crossfit__description--span-2">
            A great mix between getting in shape and improving your fitness
            level
          </span>
        </h4>
      </div>
      {/* Here is the Second choice */}
      <div className="finder__typeofworkout finder__typeofworkout--iron">
        <img src={require("../img/widget/iron-gym.jpg")} alt="iron gym" />
        <h4 className="choice__description choice__description--iron">
          <span className="choice__description--span iron__description--span-1">
            Gym
          </span>
          <span classname="choice__description--span iron__description--span-2">
            The Classic place where building your muscle requires nothing but
            your determination and iron
          </span>
        </h4>
      </div>
      {/* Here is the Third choice */}
      <div className="finder__typeofworkout finder__typeofworkout--health">
        <img src={require("../img/widget/health-club.jpg")} alt="health-club" />
        <h4 className="choice__description choice__description--health">
          <span className="choice__description--span health__description--span-1">
            Health Club
          </span>
          <span classname="choice__description--span health__description--span-2">
            Increase your Cardiovascular level, stay in shape, the best place
            for your health and your mind
          </span>
        </h4>
      </div>
    </div>
  );
};

export default FinderType;
