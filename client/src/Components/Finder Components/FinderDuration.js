import React, { useEffect } from 'react';

import { ReactComponent as MonthIcon } from '../../assets/icons/month.svg';
import { ReactComponent as SixMonthIcon } from '../../assets/icons/months.svg';
import { ReactComponent as YearIcon } from '../../assets/icons/yearIcon.svg';
const FinderDuration = ({ Duration }) => {
  useEffect(() => {
    const month = document.querySelector('#month');
    const sixMonth = document.querySelector('#sixMonth');
    const year = document.querySelector('#year');
    // Month
    month.addEventListener('click', () => {
      if (
        sixMonth.classList.contains('activeChoice') ||
        year.classList.contains('activeChoice')
      ) {
        sixMonth.classList.remove('activeChoice');
        year.classList.remove('activeChoice');
      }
      month.classList.add('activeChoice');
      Duration(1);
    });
    // Six Month
    sixMonth.addEventListener('click', () => {
      if (
        month.classList.contains('activeChoice') ||
        year.classList.contains('activeChoice')
      ) {
        month.classList.remove('activeChoice');
        year.classList.remove('activeChoice');
      }
      sixMonth.classList.add('activeChoice');
      Duration(6);
    });
    // year
    year.addEventListener('click', () => {
      if (
        month.classList.contains('activeChoice') ||
        sixMonth.classList.contains('activeChoice')
      ) {
        month.classList.remove('activeChoice');
        sixMonth.classList.remove('activeChoice');
      }
      year.classList.add('activeChoice');
      Duration(12);
    });
  });

  return (
    <div className="finder__q2">
      <h1 className="finder__title duration__title">
        Choose the subscription duration
      </h1>
      {/* Here is the first choice */}
      <div id="month" className="finder__duration finder__duration--month">
        <MonthIcon className="choice__icon" />
        <h4 className="choice__title">
          <span>month</span>
        </h4>
      </div>
      {/* Here is the Second choice */}
      <div id="sixMonth" className="finder__duration finder__duration--6month">
        <SixMonthIcon className="choice__icon" />
        <h4 className="choice__title">
          <span>6 Months</span>
        </h4>
      </div>
      {/* Here is the Third choice */}
      <div id="year" className="finder__duration finder__duration--year">
        <YearIcon className="choice__icon" />
        <h4 className="choice__title">
          <span>Year</span>
        </h4>
      </div>
    </div>
  );
};

export default FinderDuration;
