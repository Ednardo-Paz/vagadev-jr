import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../../assets/img/Logo.png';
import IconHamburguer from '../../componentsGeneral/IconHamburguerSvg';
import IconPaperPlane from '../../componentsGeneral/IconPaperPlaneSvg';
import IconSearchSvg from '../../componentsGeneral/IconSearchSvg';
import IconShopBagSvg from '../../componentsGeneral/IconShopBagSvg';
import ListaMenu from '../ListaMenu';
import CloseBtnSvg from '../../componentsGeneral/CloseBtnSvg';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

  function handleClick() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <header
        className={`${styles.header} sectionContainer  ${
          menuActive && 'menuMobile'
        }`}
      >
        <div className={styles.menuLogo}>
          <div onClick={handleClick} onMouseEnter={handleClick}>
            {menuActive ? (
              <CloseBtnSvg width={'30px'} height={'30px'} color={'#EBEBEB'} />
            ) : (
              <IconHamburguer color={'#EBEBEB'} />
            )}
          </div>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo" />
          </Link>
          <ListaMenu menuActive={menuActive} />
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
                <IconSearchSvg
                  color={'#EBEBEB'}
                  width={'25px'}
                  height={'20px'}
                />
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
        </nav>
      </header>
    </>
  );
};

export default Menu;
