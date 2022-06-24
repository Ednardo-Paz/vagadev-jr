import React from 'react';
import styles from './ListaPesquisa.module.css';
import { jogos } from '../obj';
import { useState } from 'react';
import { useEffect } from 'react';
const ListaPesquisa = ({ menuActive }) => {
  const [pesquisa, setPesquisa] = useState('');
  const [jogosPesquisa, setJogosPesquisa] = useState([]);
  const listaJogos = [];

  function toFixedFunction(price) {
    return price.toFixed(2).replace('.', ',');
  }

  useEffect(() => {
    jogos.map((jogo) => {
      if (jogo.title.indexOf(pesquisa) >= 0) {
        listaJogos.push(jogo);
      }
    });
    setJogosPesquisa(listaJogos);
  }, [pesquisa]);

  return (
    <>
      {menuActive && (
        <div className={styles.listaMenu}>
          <h1 className={styles.ListaTitleMain}>Buscar</h1>
          <div className={styles.Listainput}>
            <input
              onChange={(e) => setPesquisa(e.target.value)}
              type="text"
              placeholder="Busque o Titulo desejado..."
            />
          </div>
          <>
            {jogosPesquisa.map((jogo) => (
              <div>
                <h1 className={styles.ListaTitle}>{jogo.title}</h1>
                <div className={styles.ListaImg}>
                  <img src={jogo.img} alt={jogo.title} />
                </div>
                <p className={styles.listaText}>
                  R$ {toFixedFunction(jogo.price)}
                </p>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default ListaPesquisa;
