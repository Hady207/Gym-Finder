import React, { useState } from "react";
import FinderType from "./FinderType";
import FinderIntrest from "./FinderIntrest";
import FinderDuration from "./FinderDuration";

const FinderWidget = () => {
  const [num, setNum] = useState(2);
  const [type, setType] = useState("");
  const [duration, setDuration] = useState(1);
  const [intrest, setIntrest] = useState("");

  return (
    <div className="finder__bg">
      <div className="finder__cancel">
        <i className="fas fa-times" />
      </div>
      <div className="finder__inner">
        {num === 1 && <FinderType Type={setType} />}
        {num === 2 && <FinderDuration Duration={setDuration} />}
        {num === 3 && <FinderIntrest Intrest={setIntrest} />}
        <div className="finder__navigationarrows">
          <i
            onClick={() => setNum((num) => num - 1)}
            className="fas fa-arrow-left"
          />
          <i
            onClick={() => setNum((num) => num + 1)}
            className="fas fa-arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default FinderWidget;
