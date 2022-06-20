import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/img/Logo.png';
import IconHamburguer from '../componentsGeneral/IconHamburguerSvg';
import IconPaperPlane from '../componentsGeneral/IconPaperPlaneSvg';
import IconSearchSvg from '../componentsGeneral/IconSearchSvg';
import IconShopBagSvg from '../componentsGeneral/IconShopBagSvg';
import ListaMenu from './ListaMenu';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

  function handleClick(e) {
    let el = e.target;
    el.classList.toggle('activeLista');
    if (el.classList.value === 'activeLista') {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  }

  return (
    <header className={`${styles.header} sectionContainer`}>
      <div className={styles.menuLogo}>
        <Link onClick={handleClick} to={'/'} className={styles.menu}>
          <IconHamburguer color={'#EBEBEB'} />
        </Link>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.menuNav}>
          <li>
            <Link to="/">
              <IconPaperPlane
                height={'21px'}
                width={'26px'}
                color={'#EBEBEB'}
              />
              <span className={styles.iconSvg}>CONTATO</span>
            </Link>
          </li>
          <li className={styles.divider}></li>
          <li>
            <Link to="/">
              <IconSearchSvg color={'#EBEBEB'} width={'25px'} height={'20px'} />
              <span className={styles.iconSvg}>BUSCAR</span>
            </Link>
          </li>
          <li className={styles.divider}></li>
          <li>
            <Link to="/">
              <IconShopBagSvg
                color={'#EBEBEB'}
                width={'22px'}
                height={'26px'}
              />
            </Link>
          </li>
        </ul>
        <ListaMenu menuActive={menuActive} />
      </nav>
    </header>
  );
};

export default Menu;
