import React from 'react';
import styles from './company.scss';

const Company = ({ name, address }) => (
  <div className={styles.container}>
    <div className={styles.title}>{name}</div>
    <div className={styles.subtitle}>{address}</div>
  </div>
);

export default Company;
