import React from 'react';
// import "./App.css";
import useToggle from '../hooks/useToggle';

import FinderWidget from '../Components/Finder Components/FinderWidget';
const Home = (props) => {
  const [open, setOpen] = useToggle();
  return (
    <>
      <header className="header">
        <div className="header__hero">
          <h1 className="header__hero--title">Find the ideal gym today</h1>
          <button onClick={() => setOpen(true)} className="header__button">
            <span className="header__button--icon">
              <i className="fas fa-arrow-right"></i>
            </span>
            <span className="header__button--text">Finder widgit</span>
          </button>
        </div>
      </header>
      {open && <FinderWidget close={setOpen} />}
      <main className="main">
        <section className="about">
          <h2 className="about__title">
            <span>About us</span>
          </h2>
          <div className="about__grid">
            <div className="about__grid--left">
              <p className="paragraph-1">
                Sign up and enjoy the benefits of gym finder, find great
                discounts for your favorits gyms.
              </p>
              <p className="paragraph-2">
                Use the gym finder widgit, with help of the GF AI, gym finder
                will find the suitable gym for your needs.
              </p>
              <p className="paragraph-3">
                look up different gyms read about the reviews and staff, listen
                to gym finder community.
              </p>
            </div>
            <div className="about__grid--right">
              <div className="flex-container-1">
                <div className="img__container--1">
                  <img
                    src={require('../assets/img/Gyms/gym2.jpg')}
                    alt="gym-2"
                  />
                </div>
              </div>
              <div className="flex-container-2">
                <div className="img__container--2">
                  <img
                    src={require('../assets/img/Gyms/gym3.jpg')}
                    alt="gym-3"
                  />
                </div>
              </div>
              <div className="flex-container-3">
                <div className="img__container--3">
                  <img
                    src={require('../assets/img/Gyms/gym5.jpg')}
                    alt="gym-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
