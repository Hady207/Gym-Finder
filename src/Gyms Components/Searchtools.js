import React from "react";
import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
const Searchtools = ({ inputManage }) => {
  const onChange = (e) => {
    inputManage({ field: e.target.name, value: e.target.value });
  };
  return (
    <div className="gyms__searchtools">
      <div className="gyms__searchtools--searchbar">
        <input
          type="search"
          placeholder="Search for a gym"
          name="search"
          id=""
          onChange={onChange}
        />
        <i className="fas fa-search searchIcon"></i>
        {/* <!-- <i className="far fa-times-circle closeIcon"></i> --> */}
      </div>

      <div className="gyms__searchtools--ratings">
        {/* <label htmlFor="rating">Rating</label> */}
        {/* <input type="checkbox" id="rating" name="" value="" />
        <input type="checkbox" id="rating" name="" value="" />
        <input type="checkbox" id="rating" name="" value="" />
        <input type="checkbox" id="rating" name="" value="" />
        <input type="checkbox" id="rating" name="" value="" /> */}
        <ReactStars
          name="rating"
          count={5}
          onChange={onChange}
          size={30}
          half={true}
          emptyIcon={<i className="fas fa-star"></i>}
          halfIcon={<i className="fas fa-star-half-alt"></i>}
          fullIcon={<i className="fas fa-star"></i>}
          color2={"#00c853"}
        />
        {/* <StarRatings
          starRatedColor="blue"
          changeRating={onChange}
          numberOfStars={5}
          name="rating"
          starDimension="40px"
          starSpacing="15px" 
        />*/}
      </div>

      <div className="gyms__searchtools--price">
        <label htmlFor="price">Price</label>
        <input onChange={onChange} type="range" name="price" id="price" />
      </div>

      <div className="gyms__searchtools--location">
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
      </div>

      <div className="gyms__searchtools--gender">
        <input
          onChange={onChange}
          type="radio"
          id="male"
          name="gender"
          value="male"
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          onChange={onChange}
          type="radio"
          id="female"
          name="gender"
          value="female"
        />
        <label htmlFor="female">Female</label>
        <br />
        <input
          onChange={onChange}
          type="radio"
          id="other"
          name="gender"
          value="mixed"
        />
        <label htmlFor="other">Both</label>
      </div>

      <div className="gyms__searchtools--discounts">
        <label htmlFor="discount">Discounts</label>
        <input
          onChange={onChange}
          id="discount"
          name="discount"
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default Searchtools;
