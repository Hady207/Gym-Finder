import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useInputReducer from '../hooks/useInputReducer';
import GymCard from '../Components/Gym Components/GymCard';
import Searchtools from '../Components/Gyms Components/Searchtools';
import Gymtype from '../Components/Gyms Components/Gymtype';
import LoadingGrid from '../Components/Loading/LoadingGrid';

const Gyms = (props) => {
  const initVal = {
    // search
    search: '',
    // rating
    rating: 5,
    // price
    price: 100,
    // location
    location: '',
    // gender
    membership: 'month',
    // discounts
    discounts: false,
    // type
    iron: true,
    health: false,
    crossfit: false,
  };
  const [searchValues, dispatch] = useInputReducer(initVal);
  const [gyms, setGyms] = useState([]);
  const [rate, setRate] = useState(5);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const gymsData = await axios.get('/api/v1/gyms');
      setGyms(gymsData.data.data.gyms);
      setLoading(false);
    };
    fetchData();
  }, []);

  gyms.length > 0 && console.log(gyms[0].gymType.filter((i) => i == 'iron'));

  return (
    <>
      <main className="gyms">
        <div className="gyms__layout">
          <Searchtools
            rateFilter={setRate}
            starRate={rate}
            textFilter={setFilter}
            inputManage={dispatch}
            values={searchValues}
          />
          <div className="gyms__sidebar">
            {/* Gym Types */}
            <Gymtype inputManage={dispatch} />
          </div>
          <div className="gyms__grid">
            {/* grid here */}
            {loading ? (
              <LoadingGrid />
            ) : (
              <div className="gym__innerGrid">
                {/* <!-- card start here --> */}
                {gyms ? (
                  gyms
                    .filter((i) => i.gymName.toLowerCase().match(filter))
                    .filter((i) => Math.floor(i.rate) <= rate)
                    .filter(
                      (i) =>
                        i.memberships[searchValues.membership] <=
                        searchValues.price
                    )
                    .filter(
                      (i) =>
                        (searchValues.iron &&
                          i.gymType.filter((type) => type == 'iron') ==
                            'iron') ||
                        (searchValues.health &&
                          i.gymType.filter((type) => type == 'health') ==
                            'health') ||
                        (searchValues.crossfit &&
                          i.gymType.filter((type) => type == 'crossfit') ==
                            'crossfit')
                    )
                    .map((item) => <GymCard key={item.id} data={item} />)
                ) : (
                  <h4>No Gyms Found</h4>
                )}
                {/* <!-- card end here --> */}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Gyms;
