import React from 'react';
import TitleSctionWhite from '../../componentsGeneral/TitleSctionWhite';
import Card from '../Card';
import styles from './SectionCard.module.css';
import { jogos } from '../../obj';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgMario from '../../assets/img/mario.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FreeMode, Navigation } from 'swiper';
import { useState } from 'react';
import Modal from '../Modal';

const SectionCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  function handleClick() {
    setModalVisible(true);
  }

  return (
    <>
      {modalVisible && (
        <Modal
          children={'Pedido realizado com sucesso!'}
          onClose={() => setModalVisible(false)}
          imgModal={imgMario}
        />
      )}

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
              <SwiperSlide key={jogo.id}>
                <Card onClick={handleClick} {...jogo} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SectionCard;
