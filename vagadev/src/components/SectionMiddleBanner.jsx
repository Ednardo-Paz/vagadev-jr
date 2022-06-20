import React from 'react';
import styles from './SectionMiddleBanner.module.css';
import imgZelda from '../assets/img/zelda_banner.jpg';
import imgSekiro from '../assets/img/sekiro_banner.jpg';
const SectionMiddleBanner = () => {
  return (
    <section className={styles.middleBanner}>
      <div>
        <img className={styles.middleBannerImg} src={imgZelda} alt="" />
      </div>
      <div>
        <img className={styles.middleBannerImg} src={imgSekiro} alt="" />
      </div>
    </section>
  );
};

export default SectionMiddleBanner;
