import React from 'react';
import styles from './company.scss';
import classSet from 'classnames';

const Company = ({ className, name, address, phone }) => (
  <div className={classSet(styles.container, className)}>
    <div className={styles.title}>{name}</div>
    <div className={styles.subtitle}>{address}</div>
    <div className={classSet(styles.subtitle, 'visible-sm visible-md visible-lg')}>{phone}</div>
  </div>
);

export default Company;
