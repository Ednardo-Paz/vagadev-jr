import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/img/Logo.png';
import IconHamburguer from '../componentsGeneral/IconHamburguerSvg';

const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuLogo}>
        <div className={styles.menu}>
          <IconHamburguer />
        </div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.menuNav}>
          <li>
            <Link to="/">CONTATO</Link>
          </li>
          <li>{'|'}</li>
          <li>
            <Link to="/">BUSCAR</Link>
          </li>
          <li>{' |'}</li>
          <li>
            <Link to="/">CARRINHO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
