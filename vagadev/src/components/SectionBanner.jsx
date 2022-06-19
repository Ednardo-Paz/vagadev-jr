import React from 'react';
import styles from './SectionBanner.module.css';
import banner from '../assets/img/principal_banner_desktop.jpg';
import SliderNav from './SliderNav';

const SectionBanner = () => {
  return (
    <section className={styles.sectionContainer}>
      <img className={styles.imgBanner} src={banner} alt="" />
      <SliderNav />
    </section>
  );
};

export default SectionBanner;
