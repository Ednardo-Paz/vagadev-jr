import React from 'react';
import styles from './ListaMenu.module.css';
const ListaMenu = ({ menuActive }) => {
  return (
    <>
      {menuActive && (
        <nav className={styles.listaMenu}>
          <div className={styles.listaText}>
            <h1 className={styles.ListaTitle}>Luta</h1>
            <ul>
              <li>Mortal Konbat</li>
              <li>Smash Bros</li>
              <li>Killer instict</li>
              <li>DBZ Kakarot</li>
            </ul>
          </div>

          <div>
            <h1 className={styles.ListaTitle}>Ação / Aventura</h1>
            <ul>
              <li>GTA V</li>
              <li>Tomb Raider</li>
              <li>HALO</li>
              <li>Call of Duty</li>
            </ul>
          </div>

          <div>
            <h1 className={styles.ListaTitle}>Corrida</h1>
            <ul>
              <li>NEED For SPEED </li>
              <li>Forza Horizon</li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default ListaMenu;
