import React from 'react';
import { useContext } from 'react';
import styles from './ListaComprados.module.css';
import { UserContext } from '../storage/UserContext';

const ListaComprados = ({ menuActive }) => {
  const { produtosComprados } = useContext(UserContext);

  function toFixedFunction(price) {
    return price.toFixed(2).replace('.', ',');
  }
  return (
    <>
      {menuActive && (
        <div className={styles.listaMenu}>
          <h1 className={styles.ListaTitleMain}>
            {produtosComprados.length > 0 ? 'Adicionado' : 'Ainda não Comprou!'}
          </h1>
          {produtosComprados
            ? produtosComprados.map((produto) => (
                <>
                  <div>
                    <h1 className={styles.ListaTitle}>{produto.title}</h1>
                    <div className={styles.ListaImg}>
                      <img src={produto.img} alt="" />
                    </div>
                    <p className={styles.listaText}>
                      R$ {toFixedFunction(produto.price)}
                    </p>
                  </div>
                </>
              ))
            : null}
        </div>
      )}
    </>
  );
};

export default ListaComprados;
