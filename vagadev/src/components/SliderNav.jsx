import React from 'react';
import { useContext } from 'react';
import SlideNextButton from '../componentsGeneral/ButtonNext';
import SlidePrevButton from '../componentsGeneral/ButtonPrev';
import IconLeftSvg from '../componentsGeneral/IconLeftSvg';
import IconRightSvg from '../componentsGeneral/IconRightSvg';
import { UserContext } from '../storage/UserContext';
import styles from './SliderNav.module.css';

const SliderNav = ({ bannerText }) => {
  const { slide, swiper } = useContext(UserContext);
  return (
    <>
      <div className={styles.slider}>
        <p className={styles.sliderText}>{bannerText}</p>
        <div className={styles.pagination}>
          <span className={styles.paginationText}>
            {`${swiper && swiper} / ${slide && slide.length}`}
          </span>
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
