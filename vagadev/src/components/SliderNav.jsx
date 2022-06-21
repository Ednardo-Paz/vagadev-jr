import React from 'react';
import SlideNextButton from '../componentsGeneral/ButtonNext';
import SlidePrevButton from '../componentsGeneral/ButtonPrev';
import IconLeftSvg from '../componentsGeneral/IconLeftSvg';
import IconRightSvg from '../componentsGeneral/IconRightSvg';
import styles from './SliderNav.module.css';

const SliderNav = () => {
  return (
    <>
      <div className={styles.slider}>
        <p className={styles.sliderText}>MORTAL KOMBAT</p>
        <div className={styles.pagination}>
          <span className={styles.paginationText}>1/2</span>
          <div className={styles.iconsArrows}>
            <div className={styles.iconRight}>
              <SlideNextButton
                element={
                  <IconRightSvg color={'#fff'} width={'10px'} height={'17px'} />
                }
              />
            </div>
            <div className={styles.iconLeft}>
              <SlidePrevButton
                element={
                  <IconLeftSvg color={'#fff'} width={'10px'} height={'17px'} />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderNav;
