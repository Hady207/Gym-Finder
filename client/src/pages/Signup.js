import React, { useState, useReducer, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../Context/userContext';
import SignupC1 from '../Components/Signup Components/SignupComponent1';
import SignupC2 from '../Components/Signup Components/SignupComponent2';
import SignupC3 from '../Components/Signup Components/SignupComponent3';

const Signup = ({ history }) => {
  const [stage, setStage] = useState(0);
  const { setUser, setToken } = useContext(UserContext);
  const initialState = {
    name: '',
    birthdate: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    filePicture: '',
    gym: '',
    weight: '',
    height: '',
    gymType: '',
    equipment: false,
    staff: false,
  };
  const reducer = (state, action) => {
    return {
      ...state,
      [action.field]: action.value,
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const freshUser = await axios.post('/api/v1/user/signup', state);
      if (freshUser.data.status === 'success')
        setUser(freshUser.data.data.user);
      setToken(freshUser.data.token);
      history.push('/profile');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main className="signup-main">
        <h1>Sign Up and Enjoy Gym finder features</h1>
        <form className="form__signup" onSubmit={handleSubmit}>
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
                  stage === 100 && 'active'
                }`}
              ></div>
            </div>
            {/* <div class="form-progress-indicator four"></div> */}
          </div>
          {stage === 0 && (
            <SignupC1 setStage={setStage} values={state} dispatch={dispatch} />
          )}
          {stage === 50 && (
            <SignupC2 setStage={setStage} values={state} dispatch={dispatch} />
          )}
          {stage === 100 && (
            <SignupC3 setStage={setStage} values={state} dispatch={dispatch} />
          )}
        </form>
      </main>
    </>
  );
};

export default Signup;
