import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../../Context/userContext';

const AuthRouter = ({ Component, user, ...rest }) => {
  const { token } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(routerProps) =>
        user ? <Component {...routerProps} /> : <Redirect to="login" />
      }
    />
  );
};

export default AuthRouter;
