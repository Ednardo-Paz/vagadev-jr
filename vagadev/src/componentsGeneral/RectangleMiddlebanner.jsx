import React from 'react';
import styles from './RectangleMiddlebanner.module.css';
const RectangleMiddlebanner = ({ text }) => {
  return <div className={styles.rectangleMiddlebanner}>{text}</div>;
};

export default RectangleMiddlebanner;
