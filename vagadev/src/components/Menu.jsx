import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/img/Logo.png';
import IconHamburguer from '../componentsGeneral/IconHamburguerSvg';
import IconPaperPlane from '../componentsGeneral/IconPaperPlaneSvg';
import IconSearchSvg from '../componentsGeneral/IconSearchSvg';
import IconShopBagSvg from '../componentsGeneral/IconShopBagSvg';

const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuLogo}>
        <div className={styles.menu}>
          <IconHamburguer color={'#EBEBEB'} />
        </div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.menuNav}>
          <li>
            <IconPaperPlane height={'21px'} width={'26px'} color={'#000'} />
            <Link className={styles.iconSvg} to="/">
              CONTATO
            </Link>
          </li>
          <li className={styles.divider}></li>
          <li>
            <IconSearchSvg color={''} width={'25px'} height={'20px'} />
            <Link className={styles.iconSvg} to="/">
              BUSCAR
            </Link>
          </li>
          <li className={styles.divider}></li>
          <li>
            <Link to="/">
              <IconShopBagSvg color={''} width={'22px'} height={'26px'} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
