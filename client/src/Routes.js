import React, { useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Gyms from './pages/Gyms';
import Gym from './pages/Gym';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import FinderWidget from './Components/Finder Components/FinderWidget';
import { UserContext } from './Context/userContext';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import AuthRouter from './Components/Authentication/AuthRouter';

const Routes = ({ manageNav }) => {
  let location = useLocation();
  const { user } = useContext(UserContext);
  manageNav(location);

  return (
    <>
      {/* <TransitionGroup> */}
      {/* <CSSTransition key={location.key} classNames="slide" timeout={1000}> */}
      <Switch>
        <Route exact path="/signup" render={(props) => <Signup {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <AuthRouter exact path="/profile" Component={Profile} user={user} />
        {/* <Route exact path="/profile" render={() => <Profile />} /> */}
        <Route exact path="/gyms/:name" render={() => <Gym />} />

        <Route exact path="/gyms" render={() => <Gyms />} />
        <Route path="/finder" render={() => <FinderWidget />} />
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
      </Switch>
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}
    </>
  );
};

export default Routes;
