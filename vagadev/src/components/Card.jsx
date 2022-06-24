import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Card.module.css';
import ButtonComprado from '../componentsGeneral/ButtonComprado';
import { useContext } from 'react';
import { UserContext } from '../storage/UserContext';

const Card = ({ img, title, price, id, onClick = () => {} }) => {
  const [style, setStyle] = useState('btnCard');
  const { produtosComprados, setProdutosComprados } = useContext(UserContext);

  function toFixedFunction(price) {
    return price.toFixed(2).replace('.', ',');
  }

  const handleClick = () => {
    const copiaProdutosComprados = [...produtosComprados];
    copiaProdutosComprados.push({ img, title, price, id });

    setStyle('btnComprado');
    onClick();
    setProdutosComprados(copiaProdutosComprados);
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
            <button onClick={handleClick} className={style}>
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
