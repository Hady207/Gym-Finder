import React from "react";
import Home from "./Home";
import Gyms from "./Gyms";
import Gym from "./Gym";
import Signup from "./Signup";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" render={() => <Signup />} />
        {/* <Route exact path="/signup">
          <Signup />
        </Route> */}
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
    </div>
  );
}

export default App;
