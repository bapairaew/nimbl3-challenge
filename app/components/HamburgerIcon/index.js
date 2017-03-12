import React from 'react';
import styles from './hamburger-icon.scss';
import classSet from 'classnames';

const HamburgerIcon = ({ className }) => (
  <div className={classSet(styles.container, className)}>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
  </div>
);

export default HamburgerIcon;
