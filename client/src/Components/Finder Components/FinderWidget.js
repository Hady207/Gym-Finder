import React, { useState } from "react";
import FinderType from "./FinderType";
import FinderIntrest from "./FinderIntrest";
import FinderDuration from "./FinderDuration";

const FinderWidget = ({ close }) => {
  const [visible, setVisible] = useState(1);
  const [type, setType] = useState("");
  const [duration, setDuration] = useState(1);
  const [intrest, setIntrest] = useState("");

  return (
    <div className="finder__bg">
      <div className="finder__cancel">
        <i onClick={() => close(false)} className="fas fa-times" />
      </div>
      <div className="finder__inner">
        {visible === 1 && <FinderType Type={setType} />}
        {visible === 2 && <FinderDuration Duration={setDuration} />}
        {visible === 3 && <FinderIntrest Intrest={setIntrest} />}
        <div
          className={`finder__navigationarrows ${
            visible === 1 && "push__right"
          }`}
        >
          {visible !== 1 && (
            <i
              onClick={() => setVisible((num) => num - 1)}
              className="fas fa-arrow-left"
            />
          )}
          {visible <= 2 && (
            <i
              onClick={() => setVisible((num) => num + 1)}
              className={`fas fa-arrow-right`}
            />
          )}
          {visible === 3 && (
            <button className="button widget__submit">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinderWidget;
