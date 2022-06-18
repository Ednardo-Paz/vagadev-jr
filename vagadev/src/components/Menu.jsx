import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/img/Logo.png';
import IconHamburguer from '../componentsGeneral/IconHamburguerSvg';
import IconPaperPlane from '../componentsGeneral/IconPaperPlaneSvg';

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
            <Link to="/">CONTATO</Link>
          </li>
          <li className={styles.divider}></li>
          <li>
            <Link to="/">BUSCAR</Link>
          </li>
          <li className={styles.divider}></li>
          <li>
            <Link to="/">CARRINHO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
