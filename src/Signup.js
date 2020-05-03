import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
function Signup() {
  const [formNum, setNum] = useState(0);
  return (
    <>
      <Nav regular />
      <main className="signup-main">
        <h1>Sign Up and Enjoy Gym finder features</h1>
        <form className="form">
          <div className="signup__grid">
            <div className="signup__grid--left">
              <div className="signup__circle signup__circle--1">1</div>

              <div className="signup__circle signup__circle--2">2</div>

              <div className="signup__circle signup__circle--3">3</div>
            </div>
            <div className="signup__grid--right">
              {/* First sign up group */}
              <div
                className={`signup__inputs signup__inputs--1 ${
                  formNum === 0 ? "signup__show" : ""
                } `}
              >
                <div className="signup__group">
                  <label for="fname">First Name: </label>
                  <input
                    required
                    type="text"
                    placeholder="Ahmad"
                    name="firstname"
                    id="fname"
                  />
                  <label for="lname">Last Name: </label>
                  <input
                    required
                    placeholder="Maher"
                    type="text"
                    name="lastname"
                    id="lname"
                  />
                </div>
                <div className="signup__group">
                  <label required for="birthdate">
                    Birthday
                  </label>
                  <input type="date" name="birthdate" id="birthdate" />
                  <label for="city">City: </label>
                  <select required id="city">
                    <option>Salmiya</option>
                    <option>Salmiya</option>
                    <option>Salmiya</option>
                    <option>Salmiya</option>
                  </select>
                </div>
                <div className="signup__group">
                  <label for="address">Address: </label>
                  <input type="text" name="address" id="address" />
                  <label for="phone">Phone: </label>
                  <input type="phone" name="phone" id="phone" />
                </div>
                <div className="signup__button">
                  <button
                    onClick={() => setNum((n) => n + 1)}
                    className="signup__button--next"
                  >
                    Next <i class="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
              {/* Second sign up group */}
              <div
                className={`signup__inputs signup__inputs--2 ${
                  formNum === 1 ? "signup__show" : ""
                }`}
              >
                <div className="signup__group">
                  <label for="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="doe@example.com"
                  />
                </div>
                <div className="signup__group">
                  <label for="password">Password:</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="signup__group">
                  <label for="rpassword">Repeat Password:</label>
                  <input
                    id="rpassword"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="signup__group">
                  <div className="signup__profilePicture">
                    <img
                      src={require("../src/img/default.jpg")}
                      alt="Profile"
                    />
                  </div>
                  <input type="file" id="myFile" name="filename" />
                </div>
                <div className="signup__buttons">
                  <button
                    onClick={() => setNum((n) => n - 1)}
                    className="signup__button--prev"
                  >
                    <i class="fas fa-angle-left"></i> Prev
                  </button>
                  <button
                    onClick={() => setNum((n) => n + 1)}
                    className="signup__button--next"
                  >
                    Next <i class="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
              {/* Third sign up group */}
              <div
                className={`signup__inputs signup__inputs--3${
                  formNum === 2 ? "signup__show" : ""
                }`}
              >
                <div className="signup__question">
                  <p>Have you ever went to these gyms ?</p>
                  <select required id="gym">
                    <option>Golds Gym</option>
                    <option>Iron Man</option>
                    <option>Flex</option>
                    <option>Fitness first me</option>
                  </select>
                </div>
                <div className="signup__group">
                  <label for="weight">Weight</label>
                  <input type="number" id="weight" />
                </div>
                <div className="signup__group">
                  <label for="height">Height</label>
                  <input type="number" id="height" />
                </div>
                <div className="signup__buttons">
                  <button
                    onClick={() => setNum((n) => n - 1)}
                    className="signup__button--prev"
                  >
                    <i class="fas fa-angle-left"></i> Prev
                  </button>
                  <button className="signup__button--next">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
