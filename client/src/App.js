import React from 'react';
import Routes from './Routes';
// import './sass/main.scss';
import './css/main.min.css';
import Nav from './Nav';
import UserStore from './Context/userContext';
import Footer from './pages/Footer';
import Loading from './Components/Loading/Loadingbg';

const App = () => {
  const [regular, setRegular] = React.useState(false);
  const manageNav = (location) => {
    if (
      location.pathname === '/signup' ||
      location.pathname === '/login' ||
      location.pathname === '/profile' ||
      location.pathname === '/Gyms'
    ) {
      setRegular(true);
    } else {
      setRegular(false);
    }
  };

  return (
    <div className="App">
      <UserStore>
        {regular ? <Nav regular /> : <Nav />}
        <Routes manageNav={manageNav} />
        <Footer />
      </UserStore>
    </div>
  );
};

export default App;
