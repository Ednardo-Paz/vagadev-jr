import React from 'react';
import styles from './Contato.module.css';

const Contato = () => {
  return (
    <>
      <div className={`${styles.contato} sectionContainer`}>
        <div className={styles.contatoSction}>
          <div>
            <h1 className={styles.contatoH1}>Entre em Contato...</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
