import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
function Signup() {
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
              <div className="signup__inputs signup__inputs--1">
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
