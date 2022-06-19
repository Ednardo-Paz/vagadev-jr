import React from 'react';
import styles from './SectionBanner.module.css';
import banner from '../assets/img/principal_banner_desktop.jpg';
import SliderNav from './SliderNav';
import Title from '../componentsGeneral/Title';

const SectionBanner = () => {
  return (
    <section className={styles.sectionContainer}>
      <img className={styles.imgBanner} src={banner} alt="Mortal Kombat" />
      <div className={styles.textBanner}>
        <Title text={'MORTAL KOMBAT'} />
        <h2 className={styles.textPrice}>
          R$ 299
          <span className={styles.decimais}>,99</span>
        </h2>
        <p className={styles.textParag}>
          Mortal Kombat X combina uma apresentação cinemática única com uma
          jogabilidade totalmente nova. Os jogadores podem escolher pela
          primeira vez diversas variantes de cada personagem, afetando tanto a
          estratégia como o estilo de luta.
        </p>
      </div>
      <SliderNav />
    </section>
  );
};

export default SectionBanner;
