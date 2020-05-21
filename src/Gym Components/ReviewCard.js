import React from "react";

const stars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fas fa-star gym__star--active"></i>);
  }
  return stars;
};

function ReviewCard(props) {
  const { author, profile, rating, text, gym } = props;

  return (
    <>
      {/* <!-- Review Box start here --> */}
      <div className="reviews__box">
        <div className="reviews__info">
          <div className="reviews__info--container">
            {profile && (
              <div className="reviews__info--img">
                <img src={require(`../img/${profile}.png`)} alt="" />
              </div>
            )}

            <h3 className="reviews__info--name">{author}</h3>
            <span className="trash">
              <i className="fas fa-trash-alt"></i>
            </span>
          </div>

          <div className="reviews__info--rating">
            <span className="review--stars">{stars(rating)}</span>
            <div className="date-gym">
              <span className="review--gym">{gym}</span>
              <span className="review--date">2 months ago</span>
            </div>
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
