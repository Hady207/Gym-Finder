import React, { useState } from 'react';
import axios from 'axios';
import FinderType from './FinderType';
import FinderIntrest from './FinderIntrest';
import FinderDuration from './FinderDuration';
import FinderResults from './FinderResults';
import LoadingBG from '../Loading/Loadingbg';

const FinderWidget = ({ close }) => {
  const [visible, setVisible] = useState(1);
  const [loading, setLoading] = useState(false);
  const [gyms, setGyms] = useState([]);
  const [type, setType] = useState('');
  const [duration, setDuration] = useState(1);
  const [intrest, setIntrest] = useState('');

  const handleSubmit = async () => {
    setVisible((num) => num + 1);
    setLoading(true);
    try {
      const response = await axios.post('/api/v1/gyms/widget', {
        type,
        duration,
        intrest,
      });
      setGyms((oldG) => [...oldG, ...response.data.data.gyms]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="finder__bg">
      <div className="finder__cancel">
        <i onClick={() => close(false)} className="fas fa-times" />
      </div>
      <div className="finder__inner">
        {visible === 1 && <FinderType Type={setType} />}
        {visible === 2 && <FinderDuration Duration={setDuration} />}
        {visible === 3 && <FinderIntrest Intrest={setIntrest} />}
        {visible === 4 && <FinderResults loading={loading} RGyms={gyms} />}
        <div
          className={`finder__navigationarrows ${
            visible === 1 && 'push__right'
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
            <button onClick={handleSubmit} className="button widget__submit">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinderWidget;
