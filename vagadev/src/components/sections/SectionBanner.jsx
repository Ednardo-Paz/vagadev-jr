import React, { useState } from 'react';
import styles from './SectionBanner.module.css';
import SliderNav from '.././SliderNav';
import Banner from '../Banner';
import { jogos } from '../../obj';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useContext } from 'react';
import { UserContext } from '../../storage/UserContext';
import { useEffect } from 'react';

const SectionBanner = () => {
  const { setSwiper } = useContext(UserContext);
  const [jogosComBanner, setJogosComBanner] = useState(null);

  function bannersFunction(value) {
    if (value.banner === true) return value;
  }

  useEffect(() => {
    setJogosComBanner(jogos.filter(bannersFunction));
  }, []);

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
        {jogosComBanner &&
          jogosComBanner.map((banner, index, array) => (
            <SwiperSlide key={banner.id}>
              <Banner
                array={array}
                active={index}
                title={banner.title}
                price={banner.price}
                img={banner.img}
                id={banner.id}
                description={banner.description}
              />
              <SliderNav bannerText={banner.title} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default SectionBanner;
