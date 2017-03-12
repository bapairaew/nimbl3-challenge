import React from 'react';
import styles from './hello-message.scss';

const HelloMessage = ({ name, company }) => (
  <div className={styles.container}>
    <div className={styles.title}>{`Hello, ${name}`}</div>
    <div className={styles.subtitle}>{company}</div>
  </div>
);

export default HelloMessage;
