import React from 'react';
import TitleSctionWhite from '../../componentsGeneral/TitleSctionWhite';
import styles from './SectionCard.module.css';

const SectionCard = () => {
  return (
    <div className={`${styles.sectionCard} sectionContainer`}>
      <TitleSctionWhite text={'Produtos em destaque'} />
    </div>
  );
};

export default SectionCard;
