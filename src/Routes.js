import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Gyms from "./Gyms";
import Gym from "./Gym";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/gyms/:name">
        <Gym />
      </Route>
      <Route exact path="/gyms">
        <Gyms />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;