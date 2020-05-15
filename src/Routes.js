import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Gyms from "./Gyms";
import Gym from "./Gym";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";
import FinderWidget from "./Finder Components/FinderWidget";

const Routes = () => {
  return (
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
  );
};

export default Routes;
