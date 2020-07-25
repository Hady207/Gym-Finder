import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useInputReducer from '../hooks/useInputReducer';
import GymCard from '../Components/Gym Components/GymCard';
import Searchtools from '../Components/Gyms Components/Searchtools';
import Gymtype from '../Components/Gyms Components/Gymtype';

const Gyms = (props) => {
  const initVal = {
    // search
    search: '',
    // rating
    rating: 3,
    // price
    price: 30,
    // location
    location: '',
    // gender
    gender: 'M',
    // discounts
    discounts: false,
    // type
    general: false,
    health: false,
    crossfit: false,
  };
  const [searchValues, dispatch] = useInputReducer(initVal);
  const [gyms, setGyms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const gymsData = await axios.get('/api/v1/gyms');
      setGyms((st) => [...st, ...gymsData.data.data.gyms]);
    };
    fetchData();
  }, []);
  return (
    <>
      <main className="gyms">
        <div className="gyms__layout">
          <Searchtools inputManage={dispatch} values={searchValues} />
          <div className="gyms__sidebar">
            {/* Gym Types */}
            <Gymtype inputManage={dispatch} />
          </div>
          <div className="gyms__grid">
            {/* grid here */}
            <div className="gym__innerGrid">
              {/* <!-- card start here --> */}
              {gyms.map((item) => (
                <GymCard data={item} />
              ))}
              {/* <GymCard />
              <GymCard />
              <GymCard />
              <GymCard /> */}
              {/* <!-- card end here --> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gyms;
