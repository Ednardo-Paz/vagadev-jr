import React from 'react';
import styles from './Modal.module.css';
import CloseBtnSvg from '../componentsGeneral/CloseBtnSvg';

const Modal = ({
  alt,
  imgModal,
  id = 'modal',
  onClose = () => {},
  children,
}) => {
  const handleOutSideClose = ({ target }) => {
    if (target.id === id) onClose();
  };

  return (
    <div id={id} className={styles.modal} onClick={handleOutSideClose}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onClose}>
          <CloseBtnSvg width={'30px'} height={'30px'} />
        </div>
        <div className={styles.content}>{children}</div>
        <img src={imgModal} alt={alt} className={styles.imgModal} />
      </div>
    </div>
  );
};

export default Modal;
