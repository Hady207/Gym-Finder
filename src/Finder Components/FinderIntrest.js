import React from "react";

const FinderIntrest = () => {
  return (
    <div className="finder__q3">
      <h1 className="finder__title intrest__title">
        What intrest you the most
      </h1>
      {/* Here is the first choice */}
      <div className="finder__typeofworkout finder__typeofworkout--staff">
        <img src={require("../img/widget/staff.jpg")} alt="staff" />
        <h4 className="choice__description choice__description--staff">
          <span className="choice__description--span-1 staff__description--span-1">
            Staff
          </span>
          <span className="choice__description--span-2 staff__description--span-2">
            Look For the best staff to help you out in working out, if that what
            you looking for choose this
          </span>
        </h4>
      </div>
      {/* Here is the Second choice */}
      <div className="finder__typeofworkout finder__typeofworkout--equipment">
        <img src={require("../img/widget/gym-equipment.jpg")} alt="equipment" />
        <h4 className="choice__description choice__description--equipment">
          <span className="choice__description--span-1 equipment__description--span-1">
            Equipment
          </span>
          <span className="choice__description--span-2 equipment__description--span-2">
            You only need the set of iron and nothing else, choose this to find
            best equipment out there
          </span>
        </h4>
      </div>
      {/* Here is the Third choice */}
      <div className="finder__typeofworkout finder__typeofworkout--both">
        <img src={require("../img/widget/both.jpg")} alt="both" />
        <h4 className="choice__description choice__description--both">
          <span className="choice__description--span-1 both__description--span-1">
            Both
          </span>
          <span className="choice__description--span-2 both__description--span-2">
            You need the best of both world
          </span>
        </h4>
      </div>
    </div>
  );
};

export default FinderIntrest;
