import React from 'react';
import LoadingBG from '../Loading/Loadingbg';
import { Link } from 'react-router-dom';

const FinderResults = ({ loading, RGyms }) => {
  return (
    <>
      {loading ? (
        <LoadingBG />
      ) : (
        <div className="finder__result">
          <h1 className="finder__title">Recommended Gyms</h1>
          {/* Here is the first choice */}
          {RGyms && RGyms.length > 0 ? (
            RGyms.map((gym) => (
              <Link to={`/gyms/${gym.slug}`}>
                <div className="finder__results">
                  <img
                    src={require(`../../assets/img/Gyms/${gym.slug}/gym/${gym.headerImage}`)}
                    alt={gym.slug}
                  />
                  <h4 className="choice__description choice__description--staff">
                    <span
                      className={
                        'choice__description--span-1 staff__description--span-1'
                      }
                    >
                      {gym.gymName}
                    </span>
                    {/* <span className="choice__description--span-2 staff__description--span-2">
                    Look For the best staff to help you out in working out, if
                    that what you looking for choose this
                  </span> */}
                  </h4>
                </div>
              </Link>
            ))
          ) : (
            <h5>No Gyms avaliable</h5>
          )}
        </div>
      )}
    </>
  );
};

export default FinderResults;
