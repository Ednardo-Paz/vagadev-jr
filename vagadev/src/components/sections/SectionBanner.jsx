import React from 'react';
import styles from './SectionBanner.module.css';
import SliderNav from '.././SliderNav';
import Banner from '../Banner';
import { banners } from '../../obj';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useContext } from 'react';
import { UserContext } from '../../storage/UserContext';

const SectionBanner = () => {
  const { setSwiper } = useContext(UserContext);

  return (
    <section className={styles.sectionContainer}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={false}
        className="ySwiper"
        onSlideChange={(swiper) => {
          setSwiper(swiper.realIndex + 1);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper.realIndex + 1);
        }}
      >
        {banners &&
          banners.map((banner, index, array) => (
            <SwiperSlide>
              <Banner
                array={array}
                active={index}
                title={banner.title}
                price={banner.price}
                img={banner.img}
                id={banner.id}
                description={banner.description}
              />
              <SliderNav />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SectionBanner;
