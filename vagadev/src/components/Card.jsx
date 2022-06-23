import React from 'react';
import { useState } from 'react';
import styles from './Card.module.css';
import ButtonComprado from '../componentsGeneral/ButtonComprado';

const Card = ({ img, title, price, id, onClick = () => {} }) => {
  function toFixedFunction(price) {
    return price.toFixed(2).replace('.', ',');
  }
  const [style, setStyle] = useState('btnCard');

  const changeStyle = () => {
    setStyle('btnComprado');
    onClick();
  };

  return (
    <>
      <div className={styles.card} key={id}>
        <div className={styles.imgCard}>
          <img src={img} alt="" />
        </div>
        <div className={styles.infoCard}>
          <p className={styles.titleCard}>{title}</p>
          <h3 className={styles.priceCard}>R$ {toFixedFunction(price)}</h3>

          {style === 'btnCard' ? (
            <button onClick={changeStyle} className={style}>
              Comprar
            </button>
          ) : (
            <ButtonComprado />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
