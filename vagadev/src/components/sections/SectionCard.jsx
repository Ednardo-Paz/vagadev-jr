import React from 'react';
import TitleSctionWhite from '../../componentsGeneral/TitleSctionWhite';
import Card from '../Card';
import styles from './SectionCard.module.css';
import { jogos } from '../../obj';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FreeMode, Navigation } from 'swiper';

const SectionCard = () => {
  console.log(jogos);
  return (
    <div className={`${styles.sectionCard} sectionContainer`}>
      <TitleSctionWhite text={'Produtos em destaque'} />
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <div className={styles.allCards}>
          {jogos.map((jogo) => (
            <SwiperSlide>
              <Card
                key={jogo.id}
                img={jogo.img}
                title={jogo.title}
                price={jogo.price}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SectionCard;
