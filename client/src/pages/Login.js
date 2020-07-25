import React, { useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../Context/userContext';
import useInput from '../hooks/useInput';

const Login = ({ history }) => {
  const { setUser, setToken } = useContext(UserContext);
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  const handleLoginIn = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post('/api/v1/user/login', {
        email,
        password,
      });
      if (user.data.status === 'success') {
        // setUser((prevState) => ({ ...prevState, ...user.data.data.user }));
        setUser(user.data.data.user);
        setToken(user.data.token);
        history.push('/profile');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login__grid">
        <div className="login__grid--left">
          <h1>Login and Save Your time</h1>
          <form className="login__form" onSubmit={handleLoginIn}>
            <div className="login__container">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                name="email"
                onChange={setEmail}
                className="login__form--email"
                placeholder="doe@example.com"
                required
              />
            </div>
            <div className="login__container">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                className="login__form--password"
                placeholder="••••••••"
                minLength="8"
                value={password}
                onChange={setPassword}
                required
              />
            </div>
            <button type="submit" className="login__button">
              login
            </button>
          </form>
        </div>
        <div className="login__grid--right"></div>
      </div>
    </>
  );
};

export default Login;
