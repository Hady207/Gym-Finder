import React from 'react';
import ReactStars from 'react-rating-stars-component';
// import StarRatings from 'react-star-ratings';

const Searchtools = ({
  gyms,
  setGyms,
  textFilter,
  starRate,
  rateFilter,
  values,
  inputManage,
}) => {
  const onChange = (e) => {
    inputManage({ field: e.target.name, value: e.target.value });
  };
  const onCheckBoxChange = (e) => {
    inputManage({ field: e.target.name, value: e.target.checked });
  };
  const onStarChange = (rating) => {
    // inputManage({ field: 'rating', value: rating });
    rateFilter(rating);
  };
  const onTextChange = (e) => {
    const tR = e.target.value.toLowerCase();
    const textRge = tR.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    // const data = gyms.filter((gym) => gym.gymName.toLowerCase().match(tR));
    // setGyms([...data]);
    textFilter(textRge);
  };
  const onRatingChange = (rate) => {
    const data = gyms.filter((gym) => gym.rating <= rate);
    setGyms(data);
  };
  return (
    <div className="gyms__searchtools">
      <div className="gyms__searchtools--searchbar">
        <input
          type="search"
          placeholder="Search for a gym"
          name="search"
          id=""
          onChange={onTextChange}
        />
        <i className="fas fa-search searchIcon"></i>
        {/* <!-- <i className="far fa-times-circle closeIcon"></i> --> */}
      </div>

      <div className="gyms__searchtools--ratings">
        <ReactStars
          name="rating"
          count={5}
          onChange={onStarChange}
          size={30}
          half={false}
          value={starRate}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          color2={'#00c853'}
        />
      </div>

      <div className="gyms__searchtools--price">
        <label htmlFor="price" style={{ marginRight: 10 }}>
          Price: {values.price}{' '}
        </label>
        <input
          onChange={onChange}
          type="range"
          name="price"
          id="price"
          step={10}
          min={50}
          max={500}
        />
      </div>

      {/* <div className="gyms__searchtools--location">
        <label htmlFor="location">Choose a location:</label>
        <select onChange={onChange} name="location" id="location">
          <option defaultValue value="">
            All
          </option>
          <option value="volvo">Farawniya</option>
          <option value="saab">Hawally</option>
          <option value="mercedes">Salmiya</option>
          <option value="audi">Meshref</option>
        </select>
      </div> */}

      <div className="gyms__searchtools--gender">
        <input
          onChange={onChange}
          type="radio"
          id="month"
          name="membership"
          value="month"
        />
        <label htmlFor="month">Month</label>
        <br />
        <input
          onChange={onChange}
          type="radio"
          id="sixmonth"
          name="membership"
          value="sixmonth"
        />
        <label htmlFor="sixmonth">Six Months</label>
        <br />
        <input
          onChange={onChange}
          type="radio"
          id="year"
          name="membership"
          value="year"
        />
        <label htmlFor="year">Year</label>
      </div>

      <div className="gyms__searchtools--discounts">
        <label htmlFor="discounts">Discounts</label>
        <input
          onChange={onCheckBoxChange}
          id="discounts"
          name="discounts"
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default Searchtools;
