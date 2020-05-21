import React from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import Footer from "./Footer";

const App = () => {
  const [regular, setRegular] = React.useState(false);
  const manageNav = (location) => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/login" ||
      location.pathname === "/Gyms"
    ) {
      setRegular(true);
    } else {
      setRegular(false);
    }
  };

  return (
    <div className="App">
      {regular ? <Nav regular /> : <Nav />}
      <Routes manageNav={manageNav} />
      <Footer />
    </div>
  );
};

export default App;
