import React from "react";
import Routes from "./Routes";
import "./sass/main.scss";
import Nav from "./Nav";
import Footer from "./pages/Footer";

const App = () => {
  const [regular, setRegular] = React.useState(false);
  const manageNav = (location) => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/login" ||
      location.pathname === "/profile" ||
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