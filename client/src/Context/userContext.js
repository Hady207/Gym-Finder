import React, { useState, createContext } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext(null);

const testObj = {
  age: null,
  body: { height: 175, weight: 80 },
  email: 'hady207@hotmail.com',
  id: '5f079d2492e8c2a0103b6052',
  location: 'Salmiya',
  name: { firstName: 'Hadi', lastName: 'Elrosol' },
  preference: { equipment: true, staff: true, gymType: 'iron' },
  profileImage: 'profile.jpg',
  role: 'user',
  __v: 0,
  _id: '5f079d2492e8c2a0103b6052',
};

const UserStore = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default UserStore;
