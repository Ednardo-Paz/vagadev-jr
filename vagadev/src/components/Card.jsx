import React from 'react';
import styles from './Card.module.css';

const Card = ({ img, title, price, id }) => {
  function toFixedFunction(price) {
    return price.toFixed(2).replace('.', ',');
  }
  return (
    <>
      <div className={styles.card} key={id}>
        <div className={styles.imgCard}>
          <img src={img} alt="" />
        </div>
        <div className={styles.infoCard}>
          <p className={styles.titleCard}>{title}</p>
          <h3 className={styles.priceCard}>R$ {toFixedFunction(price)}</h3>
          <button className={styles.btnCard}>Comprar</button>
        </div>
      </div>
    </>
  );
};

export default Card;
