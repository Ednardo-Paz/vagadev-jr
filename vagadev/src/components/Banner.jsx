import React from 'react';
import styles from './Banner.module.css';
import Title from '../componentsGeneral/Title';

const Banner = ({ img, title, description, price, id }) => {
  return (
    <div key={id}>
      <div>
        <img className={styles.imgBanner} src={img} alt={title} />
      </div>
      <div className={styles.textBanner}>
        <Title text={title} />
        {price ? (
          <h2 className={styles.textPrice}>
            R$ {price}
            <span className={styles.decimais}>,99</span>
          </h2>
        ) : null}
        <p className={styles.textParag}>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
