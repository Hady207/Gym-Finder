import React from "react";

const stars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fas fa-star gym__star--active"></i>);
  }
  return stars;
};

function ReviewCard(props) {
  const { author, profile, rating, text } = props;

  return (
    <>
      {/* <!-- Review Box start here --> */}
      <div className="reviews__box">
        <div className="reviews__info">
          <div className="reviews__info--container">
            <div className="reviews__info--img">
              <img src={require(`../img/${profile}.png`)} alt="" />
            </div>
            <h3 className="reviews__info--name">{author}</h3>
          </div>

          <div className="reviews__info--rating">
            {stars(rating)}
            <span>2 months ago</span>
          </div>
        </div>

        <div className="reviews__text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
