import React from 'react';
import styles from './TitleSectionWhite.module.css';
import triangle from '../assets/img/h1triang.png';
const TitleSctionWhite = ({ text }) => {
  return (
    <div className={styles.titleSctionWhite}>
      <div>
        <img className={styles.imgTitle} src={triangle} alt="triangle" />
      </div>
      <h1 className={styles.titleSctionWhiteH1}>{text}</h1>
    </div>
  );
};

export default TitleSctionWhite;
