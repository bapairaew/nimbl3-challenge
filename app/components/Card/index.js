import React from 'react';
import styles from './card.scss';

const Card = ({ children }) => (
  <div className={styles.card}>
    {children}
  </div>
);

export default Card;
