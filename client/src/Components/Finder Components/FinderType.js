import React, { useEffect } from 'react';

const FinderType = ({ Type }) => {
  useEffect(() => {
    const crossfit = document.querySelector('#crossfit');
    const iron = document.querySelector('#iron');
    const health = document.querySelector('#health');
    // Crossfit
    crossfit.addEventListener('click', () => {
      if (
        iron.classList.contains('activeChoice') ||
        health.classList.contains('activeChoice')
      ) {
        iron.classList.remove('activeChoice');
        health.classList.remove('activeChoice');
      }
      crossfit.classList.add('activeChoice');
      Type('crossfit');
    });
    // Iron
    iron.addEventListener('click', () => {
      if (
        crossfit.classList.contains('activeChoice') ||
        health.classList.contains('activeChoice')
      ) {
        crossfit.classList.remove('activeChoice');
        health.classList.remove('activeChoice');
      }
      iron.classList.add('activeChoice');
      Type('iron');
    });
    // Health
    health.addEventListener('click', () => {
      if (
        crossfit.classList.contains('activeChoice') ||
        iron.classList.contains('activeChoice')
      ) {
        crossfit.classList.remove('activeChoice');
        iron.classList.remove('activeChoice');
      }
      health.classList.add('activeChoice');
      Type('health');
    });
  });
  return (
    <div className="finder__q1">
      <h1 className="finder__title type__title">Choose the Gym</h1>
      {/* Here is the first choice */}
      <div
        id="crossfit"
        className="finder__typeofworkout finder__typeofworkout--crossfit"
      >
        <img
          src={require('../../assets/img/widget/cross-fit-gym.jpg')}
          alt="Cross Fit"
        />
        <h4 className="choice__description choice__description--crossfit">
          <span className="choice__description--span-1 crossfit__description--span-1">
            Cross Fit Gym
          </span>
          <span className="choice__description--span-2 crossfit__description--span-2">
            A great mix between getting in shape and improving your fitness
            level
          </span>
        </h4>
      </div>
      {/* Here is the Second choice */}
      <div
        id="iron"
        className="finder__typeofworkout finder__typeofworkout--iron"
      >
        <img
          src={require('../../assets/img/widget/iron-gym.jpg')}
          alt="iron gym"
        />
        <h4 className="choice__description choice__description--iron">
          <span className="choice__description--span-1 iron__description--span-1">
            Gym
          </span>
          <span className="choice__description--span-2 iron__description--span-2">
            The Classic place where building your muscle requires nothing but
            your determination and iron
          </span>
        </h4>
      </div>
      {/* Here is the Third choice */}
      <div
        id="health"
        className="finder__typeofworkout finder__typeofworkout--health"
      >
        <img
          src={require('../../assets/img/widget/health-club.jpg')}
          alt="health-club"
        />
        <h4 className="choice__description choice__description--health">
          <span className="choice__description--span-1 health__description--span-1">
            Health Club
          </span>
          <span className="choice__description--span-2 health__description--span-2">
            Increase your Cardiovascular level, stay in shape, the best place
            for your health and your mind
          </span>
        </h4>
      </div>
    </div>
  );
};

export default FinderType;
