import React from 'react';
import styles from './SectionMiddleBanner.module.css';
import imgZelda from '../assets/img/zelda_banner.jpg';
import imgSekiro from '../assets/img/sekiro_banner.jpg';
import RectangleMiddlebanner from '../componentsGeneral/RectangleMiddlebanner';
const SectionMiddleBanner = () => {
  return (
    <section className={`${styles.middleBanner} sectionContainer`}>
      <div>
        <img className={styles.middleBannerImg} src={imgZelda} alt="" />
        <RectangleMiddlebanner
          text={'The Legend of Zelda - Breath of th wild'}
        />
      </div>
      <div>
        <img className={styles.middleBannerImg} src={imgSekiro} alt="" />
        <RectangleMiddlebanner text={'SEKIRO - Shadows die twice'} />
      </div>
    </section>
  );
};

export default SectionMiddleBanner;
