import React from 'react';
import styles from './main-container.scss';

const MainContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default MainContainer;
