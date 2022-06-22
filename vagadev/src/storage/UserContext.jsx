import React, { useState } from 'react';

export const UserContext = React.createContext({});

export const GlobalStorage = ({ children }) => {
  const [slide, setSlide] = useState(null);
  const [swiper, setSwiper] = useState(0);

  return (
    <UserContext.Provider value={{ setSlide, slide, swiper, setSwiper }}>
      {children}
    </UserContext.Provider>
  );
};
