import React, { useState } from 'react';

export const UserContext = React.createContext({});

export const GlobalStorage = ({ children }) => {
  const [slide, setSlide] = useState(null);
  const [swiper, setSwiper] = useState(0);
  const [produtosComprados, setProdutosComprados] = useState([]);

  return (
    <UserContext.Provider
      value={{
        setSlide,
        slide,
        swiper,
        setSwiper,
        produtosComprados,
        setProdutosComprados,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
