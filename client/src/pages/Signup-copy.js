import React, { useState, useReducer } from 'react';

import Signup1 from '../Components/Signup Components/Signup1';
import Signup2 from '../Components/Signup Components/Signup3';
import Signup3 from '../Components/Signup Components/Signup2';

import SignupC1 from '../Components/Signup Components/SignupComponent1';
import SignupC2 from '../Components/Signup Components/SignupComponent2';
import SignupC3 from '../Components/Signup Components/SignupComponent3';

const Signup = () => {
  const [stage, setStage] = useState(100);
  const initialState = {
    name: '',
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
    gymType: '',
    equipment: '',
    staff: '',
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
          <div className="signup__progress">
            <progress min="0" max="100" value={stage} step="33"></progress>
            <div className="indicator__container">
              <div className="form-progress-indicator one active"></div>
              <div
                className={`form-progress-indicator two ${
                  stage >= 50 && 'active'
                }`}
              ></div>
              <div
                className={`form-progress-indicator three ${
                  stage == 100 && 'active'
                }`}
              ></div>
            </div>
            {/* <div class="form-progress-indicator four"></div> */}
          </div>
          {stage === 0 && <SignupC1 setStage={setStage} dispatch={dispatch} />}
          {stage === 50 && <SignupC2 setStage={setStage} dispatch={dispatch} />}
          {stage === 100 && (
            <SignupC3 setStage={setStage} dispatch={dispatch} />
          )}
        </form>
      </main>
    </>
  );
};

export default Signup;
