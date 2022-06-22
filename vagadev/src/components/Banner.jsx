import React from 'react';
import styles from './Banner.module.css';
import Title from '../componentsGeneral/Title';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../storage/UserContext';

const Banner = ({ img, title, description, price, id, active, array }) => {
  const { setSlide } = useContext(UserContext);
  useEffect(() => {
    setSlide(array);
  }, []);

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
