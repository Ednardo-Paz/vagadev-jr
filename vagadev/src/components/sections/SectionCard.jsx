import React from 'react';
import TitleSctionWhite from '../../componentsGeneral/TitleSctionWhite';
import Card from '../Card';
import styles from './SectionCard.module.css';
import { jogos } from '../../obj';

const SectionCard = () => {
  console.log(jogos);
  return (
    <div className={`${styles.sectionCard} sectionContainer`}>
      <TitleSctionWhite text={'Produtos em destaque'} />
      <div className={styles.allCards}>
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            img={jogo.img}
            title={jogo.title}
            price={jogo.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
