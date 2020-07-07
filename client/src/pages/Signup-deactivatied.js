import React, { useState, useReducer } from 'react';

import Signup1 from '../Components/Signup Components/Signup1';
import Signup2 from '../Components/Signup Components/Signup3';
import Signup3 from '../Components/Signup Components/Signup2';

const Signup = () => {
  const [formNum, setNum] = useState(0);
  const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    rpassword: '',
    filePicture: '',
    gym: '',
    weight: '',
    height: '',
  };
  const reducer = (state, action) => {
    return {
      ...state,
      [action.field]: action.value,
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <main className="signup-main">
        <h1>Sign Up and Enjoy Gym finder features</h1>
        <form className="form__signup">
          <div className="signup__grid">
            <div className="signup__grid--left">
              <div
                className={`signup__circle signup__circle--1 ${
                  formNum > 0 ? 'signup__circle--go' : ''
                } `}
              >
                1
              </div>

              <div
                className={`signup__circle signup__circle--2 ${
                  formNum > 1 ? 'signup__circle--go' : ''
                }`}
              >
                2
              </div>

              <div
                className={`signup__circle signup__circle--3 ${
                  formNum > 2 ? 'signup__circle--go' : ''
                }`}
              >
                3
              </div>
            </div>
            <div className="signup__grid--right">
              <Signup1 formNum={formNum} setNum={setNum} manage={dispatch} />
              <Signup2 formNum={formNum} setNum={setNum} manage={dispatch} />
              <Signup3 formNum={formNum} setNum={setNum} manage={dispatch} />
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
