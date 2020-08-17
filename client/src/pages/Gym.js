import React, { useState, useEffect, useContext, useRef } from 'react';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

import { UserContext } from '../Context/userContext';
import useToggle from '../hooks/useToggle';
import ReviewCard from '../Components/Gym Components/ReviewCard';
import ReviewForm from '../Components/Gym Components/reviewForm';
import Loading from '../Components/Loading/Loadingbg';
import Star from '../Components/Gyms Components/Star';
import Map from '../Components/Map';

const Gym = (props) => {
  let { slug } = useParams();
  const [open, setOpen] = useToggle();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ gym: {} });
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const gym = await Axios.get(`/api/v1/gyms/${slug}`);
      setData(gym.data.data);
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  console.log(data.gym);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="gym">
            <div className="gym__cutway">
              <div className="gym__overlay"></div>
              <img
                src={require(`../assets/img/Gyms/golds-gym/gym/${data.gym.headerImage}`)}
                className="gym__img"
                alt="gym name"
              />
              <div className="gym__name">
                <h1>{data.gym.gymName}</h1>
              </div>

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
            <ReactStars
              count={5}
              half={true}
              value={data.gym.rate}
              size={30}
              emptyIcon={<Star type="fas fa-star" />}
              halfIcon={<Star type="fas fa-star-half-alt " />}
              fullIcon={<Star type="fas fa-star " />}
              color2={'#00c853'}
            />
            <div className="gym__rating--desc">
              <span>{data.gym.rate}</span>{' '}
              <span>({data.gym.ratingsQuantity} ratings)</span>
              {''}
              <span>15,776 members</span>
            </div>
          </div>
          <section className="staff">
            <h2 className="staff__title">Golds Gym top staff</h2>
            <div className="staff__grid">
              {data.gym.staff.map((coach, i) => {
                return (
                  <div
                    key={coach.name}
                    className={`staff__card staff__card--${++i}`}
                  >
                    <div className="staff__card--img">
                      <img
                        src={require(`../assets/img/Gyms/golds-gym/staff/${coach.profile}`)}
                        alt={coach.name}
                      />
                    </div>
                    <div className="staff__card--info">
                      <h3 className="name">{coach.name}</h3>
                      <h5 className="specialty">{coach.speciality}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="information">
            <h2 className="information__title">Who we are</h2>
            <div className="information__container">
              <Map locations={data.gym.locations} />
              <div className="information__desc">
                <p className="information__desc--1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dignissimos reprehenderit voluptatum hic nihil saepe tempore
                  quisquam adipisci sint magni quae pariatur a quibusdam
                  perferendis voluptate quod illo, praesentium aliquid eum!
                </p>

                <p className="information__desc--2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dignissimos reprehenderit voluptatum hic nihil saepe tempore
                  quisquam adipisci sint magni quae pariatur a quibusdam
                  perferendis voluptate quod illo, praesentium aliquid eum!
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
                <img src={require('../assets/img/Gyms/gym1.jpg')} alt="" />
              </div>
              <div className="gallery__photo gallery__photo--2 gallery__photo--active">
                <img src={require('../assets/img/Gyms/gym2.jpg')} alt="" />
              </div>
              <div className="gallery__photo gallery__photo--3">
                <img src={require('../assets/img/Gyms/gym3.jpg')} alt="" />
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
              {data.gym.reviews.length > 0 ? (
                data.gym.reviews.map((reviewItem) => (
                  <ReviewCard key={reviewItem._id} review={reviewItem} />
                ))
              ) : (
                <h3 className="empty__review"> be the first to add a review</h3>
              )}
              {/* <!-- Review Box end here here --> */}
            </div>

            {user.id ? (
              <button className="button reviews__button" onClick={setOpen}>
                <i className="fas fa-pen-square"></i>{' '}
                <span>Add New Review</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="button"
                style={{
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                login to add a review
              </Link>
            )}
            {/* <button className="button reviews__button" onClick={setOpen}>
              <i className="fas fa-pen-square"></i> <span>Add New Review</span>
            </button> */}
          </section>
          {user.id ?? (
            <ReviewForm
              open={open}
              setOpen={setOpen}
              user={user}
              gymId={data.gym.id}
            />
          )}
          {/* <ReviewForm
            open={open}
            setOpen={setOpen}
            user={user}
            gymId={data.gym.id}
          /> */}
        </>
      )}
    </>
  );
};

export default Gym;
