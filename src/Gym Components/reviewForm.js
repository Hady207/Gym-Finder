import React from "react";
// import useToggle from "./hooks/useToggle";

// const [open, setOpen] = useToggle(true);
function reviewForm(props) {
  const { open, setOpen } = props;
  return (
    <div
      className={`review__form ${
        open ? "review__form--show" : "review__form--hide"
      }`}
    >
      <span onClick={setOpen} className="crossIcon">
        <i className="far fa-times-circle"></i>
      </span>
      <div className="review__card">
        <div className="reviews__box">
          <div className="reviews__info">
            <div className="reviews__info--container">
              <div className="reviews__info--img">
                <img src={require("../img/logo.png")} alt="" />
              </div>
              <h3 className="reviews__info--name">Hadi Maher</h3>
            </div>

            <div className="reviews__info--rating">
              <i className="fas fa-star gym__star--active"></i>
              <i className="fas fa-star gym__star--active"></i>
              <i className="fas fa-star gym__star--active"></i>
              <i className="fas fa-star gym__star--active"></i>
              <i className="fas fa-star-half-alt gym__star--active"></i>
              <span>4.5/5</span>
            </div>
          </div>

          <div className="reviewText__form">
            <textarea name="reviewText" id=""></textarea>
          </div>
        </div>
        <button className="button reviews__button reviews__button--submit">
          <i className="fas fa-pen-square"></i> <span>Submit</span>
        </button>
      </div>
    </div>
  );
}

export default reviewForm;
