import React from "react";
import Finder1 from "./Finder1";

const FinderWidget = () => {
  return (
    <div className="finder__bg">
      <div className="finder__cancel">
        <i class="fas fa-times"></i>
      </div>
      <div className="finder__inner">
        <Finder1 />
        <div className="finder__q2"></div>
        <div className="finder__q3"></div>
        <div className="finder__navigationarrows">
          <i className="fas fa-arrow-left"></i>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default FinderWidget;
