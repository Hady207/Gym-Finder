import React from "react";
import Nav from "./Nav";
import useToggle from "./hooks/useToggle";
import ReviewCard from "./Gym Components/ReviewCard";
import ReviewForm from "./Gym Components/reviewForm";
import Footer from "./Footer";

const Gym = (props) => {
  const [open, setOpen] = useToggle();
  return (
    <>
      <Nav />
      <header className="gym">
        <div className="gym__cutway">
          <div className="gym__overlay"></div>
          <img
            src={require("./img/gym2.jpg")}
            className="gym__img"
            alt="gym name"
          />
          <div className="gym__name">
            <h1>Golds Gym</h1>
          </div>
          {/* <!-- <div className="gym__scroll">
          <div className="gym__arrow gym__arrow--right"></div>
          <div className="gym__arrow gym__arrow--left"></div>
        </div> --> */}
          <div className="gym__arrow gym__arrow--right"></div>
          <div className="gym__arrow gym__arrow--left"></div>
        </div>
      </header>
      <div className="gym__address">
        <span>Salmiya</span>
        <span>nasser al badr street</span>
        <span>block: 12</span>
        <span>avenue: 11</span>
      </div>
      <div className="gym__rating">
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star gym__star--active"></i>
        <i className="fas fa-star-half-alt gym__star--active"></i>
        <div className="gym__rating--desc">
          <span>4.7</span> <span>(2,973 ratings)</span>
          <span>15,776 members</span>
        </div>
      </div>
      <section className="staff">
        <h2 className="staff__title">Golds Gym top staff</h2>
        <div className="staff__grid">
          <div className="staff__card staff__card--1">
            <div className="staff__card--img">
              <img src={require("./img/gym6.jpg")} alt="name of the couch" />
            </div>
            <div className="staff__card--info">
              <h3 className="name">name of the coach here</h3>
              <h5 className="specialty">Weight Lifting</h5>
            </div>
          </div>

          <div className="staff__card staff__card--2">
            <div className="staff__card--img">
              <img src={require("./img/gym6.jpg")} alt="name of the couch" />
            </div>
            <div className="staff__card--info">
              <h3 className="name">name of the coach here</h3>
              <h5 className="specialty">Cross Fit</h5>
            </div>
          </div>

          <div className="staff__card staff__card--3">
            <div className="staff__card--img">
              <img src={require("./img/gym6.jpg")} alt="name of the couch" />
            </div>
            <div className="staff__card--info">
              <h3 className="name">name of the coach here</h3>
              <h5 className="specialty">Weight Lifting</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="information">
        <h2 className="information__title">Who we are</h2>
        <div className="information__container">
          <div className="information__map">
            Map here Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt, deleniti. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ullam, ipsam.
          </div>
          <div className="information__desc">
            <p className="information__desc--1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos reprehenderit voluptatum hic nihil saepe tempore
              quisquam adipisci sint magni quae pariatur a quibusdam perferendis
              voluptate quod illo, praesentium aliquid eum!
            </p>

            <p className="information__desc--2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos reprehenderit voluptatum hic nihil saepe tempore
              quisquam adipisci sint magni quae pariatur a quibusdam perferendis
              voluptate quod illo, praesentium aliquid eum!
            </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <h2 className="gallery__title">Gallery</h2>

        <div className="gallery__grid">
          <div className="gallery__arrow gallery__arrow--left">
            <i className="fas fa-angle-left"></i>
          </div>
          <div className="gallery__photo gallery__photo--1">
            <img src={require("./img/gym1.jpg")} alt="" />
          </div>
          <div className="gallery__photo gallery__photo--2 gallery__photo--active">
            <img src={require("./img/gym2.jpg")} alt="" />
          </div>
          <div className="gallery__photo gallery__photo--3">
            <img src={require("./img/gym3.jpg")} alt="" />
          </div>
          <div className="gallery__arrow gallery__arrow--right">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </section>
      <section className="reviews">
        <h2 className="reviews__title">Reviews</h2>
        <div className="reviews__container">
          {/* <!-- Review Box start here --> */}
          <ReviewCard
            profile="logo"
            author="Hadi Maher"
            text="hello World"
            rating={4}
          />

          <ReviewCard
            profile="logo"
            author="Mohammed"
            text="hello World 2 "
            rating={2}
          />

          {/* <!-- Review Box end here here --> */}
        </div>

        <button className="button reviews__button" onClick={setOpen}>
          <i className="fas fa-pen-square"></i> <span>Add New Review</span>
        </button>
      </section>

      <ReviewForm open={open} setOpen={setOpen} />

      <Footer />
    </>
  );
};

export default Gym;
