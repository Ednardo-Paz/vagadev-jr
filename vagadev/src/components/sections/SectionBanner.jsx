import React from 'react';
import styles from './SectionBanner.module.css';
import SliderNav from '.././SliderNav';
import Banner from '../Banner';
import { banners } from '../../obj';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { useSwiperSlide } from 'swiper/react';
import SlideNextButton from '../../componentsGeneral/ButtonNext';
const SectionBanner = () => {
  const swiper = useSwiperSlide();

  return (
    <section className={styles.sectionContainer}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="ySwiper"
      >
        {banners &&
          banners.map((banner) => (
            <SwiperSlide>
              <Banner
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
