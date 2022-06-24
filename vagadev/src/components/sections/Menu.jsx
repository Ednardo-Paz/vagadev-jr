import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../../assets/img/Logo.png';
import IconHamburguer from '../../componentsGeneral/IconHamburguerSvg';
import IconPaperPlane from '../../componentsGeneral/IconPaperPlaneSvg';
import IconSearchSvg from '../../componentsGeneral/IconSearchSvg';
import IconShopBagSvg from '../../componentsGeneral/IconShopBagSvg';
import ListaMenu from '../ListaMenu';

import { UserContext } from '../../storage/UserContext';
const Menu = () => {
  const [menuActiveByHover, setMenuActiveByHover] = useState(false);
  const [menuActiveByClick, setMenuActiveByClick] = useState(false);

  const { produtosComprados } = useContext(UserContext);

  function handleClick() {
    setMenuActiveByClick(!menuActiveByClick);
    setMenuActiveByHover(false);
  }

  function showMenu() {
    setMenuActiveByHover(true);
  }

  function hideMenu() {
    setMenuActiveByHover(false);
  }

  return (
    <>
      <header
        className={`${styles.header} sectionContainer  ${
          menuActiveByClick && 'menuMobile'
        }`}
      >
        <div className={styles.menuLogo}>
          <div
            onClick={handleClick}
            onMouseEnter={showMenu}
            onMouseLeave={hideMenu}
          >
            {menuActiveByClick ? (
              <div className={styles.btn}>
                <div className={styles.btnClose}></div>
              </div>
            ) : (
              <IconHamburguer color={'#EBEBEB'} />
            )}
          </div>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Logo" />
          </Link>
          <ListaMenu menuActive={menuActiveByHover || menuActiveByClick} />
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
              <Link to="/" className={styles.amount}>
                <IconShopBagSvg
                  color={'#EBEBEB'}
                  width={'22px'}
                  height={'26px'}
                />
                <div>
                  <p className={styles.amountText}>
                    {produtosComprados.length}
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
