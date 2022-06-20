import React from 'react';
import Menu from '../components/Menu';
import SectionBanner from '../components/SectionBanner';
import SectionMiddleBanner from '../components/SectionMiddleBanner';

const Home = () => {
  return (
    <>
      <section className="container">
        <Menu />
        <SectionBanner />
        <SectionMiddleBanner />
      </section>
    </>
  );
};

export default Home;
