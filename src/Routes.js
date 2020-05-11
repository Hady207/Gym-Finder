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
      <Route exact path="/profile" render={() => <Profile />} />
      <Route exact path="/gyms/:name" render={() => <Gym />} />

      <Route exact path="/gyms" render={() => <Gyms />} />
      <Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
    </Switch>
  );
};

export default Routes;
