import React from 'react';
import SectionBanner from '../components/sections/SectionBanner';
import SectionCart from '../components/sections/SectionCard';
import SectionMiddleBanner from '../components/sections/SectionMiddleBanner';

const Home = () => {
  return (
    <>
      <section className="container">
        <SectionBanner />
        <SectionMiddleBanner />
        <SectionCart />
      </section>
    </>
  );
};

export default Home;
