import React from 'react';
import styles from './Footer.module.css';
import logoFooter from '../../assets/img/logo_header 1.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoFooter}>
        <img
          className={styles.logoFooterImg}
          src={logoFooter}
          alt="Logo Footer"
        />
      </div>
      <div className={styles.copyright}>
        <p>Agência N1 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
