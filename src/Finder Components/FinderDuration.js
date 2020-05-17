import React from "react";
import { ReactComponent as MonthIcon } from "../icons/month.svg";
import { ReactComponent as SixMonthIcon } from "../icons/months.svg";
import { ReactComponent as YearIcon } from "../icons/yearIcon.svg";
const FinderDuration = () => {
  return (
    <div className="finder__q2">
      <h1 className="finder__title duration__title">
        Choose the subscription duration
      </h1>
      {/* Here is the first choice */}
      <div className="finder__duration finder__duration--month">
        <MonthIcon className="choice__icon" />
        <h4 className="choice__title">
          <span>month</span>
        </h4>
      </div>
      {/* Here is the Second choice */}
      <div className="finder__duration finder__duration--6month">
        <SixMonthIcon className="choice__icon" />
        <h4 className="choice__title">
          <span>6 Months</span>
        </h4>
      </div>
      {/* Here is the Third choice */}
      <div className="finder__duration finder__duration--year">
        <YearIcon className="choice__icon" />
        <h4 className="choice__title">
          <span>Year</span>
        </h4>
      </div>
    </div>
  );
};

export default FinderDuration;
