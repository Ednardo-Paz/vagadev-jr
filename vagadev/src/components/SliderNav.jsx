import React from 'react';
import IconLeftSvg from '../componentsGeneral/IconLeftSvg';
import IconRightSvg from '../componentsGeneral/IconRightSvg';
import styles from './SliderNav.module.css';

const SliderNav = () => {
  return (
    <div className={styles.slider}>
      <p className={styles.sliderText}>MORTAL KOMBAT</p>
      <p className={styles.pagination}>
        <span className={styles.paginationText}>1/2</span>
        <div className={styles.iconsArrows}>
          <div className={styles.iconRight}>
            <IconRightSvg color={'#fff'} width={'10px'} height={'17px'} />
          </div>
          <div className={styles.iconLeft}>
            <IconLeftSvg color={'#fff'} width={'10px'} height={'17px'} />
          </div>
        </div>
      </p>
    </div>
  );
};

export default SliderNav;
