import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Gyms from "./Gyms";
import Gym from "./Gym";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";
import FinderWidget from "./Finder Components/FinderWidget";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

const Routes = ({ manageNav }) => {
  let location = useLocation();
  manageNav(location);

  return (
    <>
      {/* <TransitionGroup> */}
      {/* <CSSTransition key={location.key} classNames="slide" timeout={1000}> */}
      <Switch>
        <Route exact path="/signup" render={() => <Signup />} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile" render={() => <Profile />} />
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
