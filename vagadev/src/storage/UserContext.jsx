import React, { useState } from 'react';

export const UserContext = React.createContext({});

export const GlobalStorage = ({ children }) => {
  const [slide, setSlide] = useState(null);

  return (
    <UserContext.Provider value={{ setSlide, slide }}>
      {children}
    </UserContext.Provider>
  );
};
