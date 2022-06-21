import React from 'react';
import Menu from '../components/Menu';
import SectionBanner from '../components/sections/SectionBanner';

import SectionCart from '../components/sections/SectionCard';
import SectionMiddleBanner from '../components/sections/SectionMiddleBanner';

const Home = () => {
  return (
    <>
      <section className="container">
        <Menu />
        <SectionBanner />
        <SectionMiddleBanner />
        <SectionCart />
      </section>
    </>
  );
};

export default Home;
