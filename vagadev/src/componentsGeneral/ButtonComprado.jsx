import React from 'react';
import styles from './ButtonComprado.module.css';
import marioImg from '../assets/img/image_6-removebg-preview.png';
const ButtonComprado = () => {
  return (
    <>
      <div className={styles.btnCompradoDiv}>
        <div>
          <img className={styles.btnCompradoImg} src={marioImg} alt="" />
        </div>
        <button className={styles.btnComprado}>
          <span>Comprado!</span>
        </button>
      </div>
    </>
  );
};

export default ButtonComprado;
