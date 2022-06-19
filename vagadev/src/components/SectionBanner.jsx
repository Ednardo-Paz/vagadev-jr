import React from 'react';
import styles from './SectionBanner.module.css';
import banner from '../assets/img/principal_banner_desktop.jpg';

const SectionBanner = () => {
  return (
    <section className={styles.sectionContainer}>
      <img className={styles.imgBanner} src={banner} alt="" />
    </section>
  );
};

export default SectionBanner;
