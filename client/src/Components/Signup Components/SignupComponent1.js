import React from 'react';

const SignupComponent1 = ({ dispatch, setStage }) => {
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  return (
    <div className="signup__container">
      <div className="signup__group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required onChange={onChange} />
      </div>
      <div className="signup__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={onChange}
        />
      </div>
      <div className="signup__group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
      </div>
      <div className="signup__group">
        <label htmlFor="rpassword">repeat password</label>
        <input
          type="password"
          id="rpassword"
          name="rpassword"
          onChange={onChange}
          required
        />
      </div>
      <div className="buttons__group">
        <button
          className="signup__button--next"
          onClick={() => setStage((n) => n + 50)}
        >
          Next <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SignupComponent1;
