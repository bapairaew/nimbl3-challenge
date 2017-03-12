import React from 'react';
import styles from './form-group.scss';

const FormGroup = ({ label, children }) => (
  <div className={styles.container}>
    {label && <label className={styles.label}>{label}</label>}
    <div className={styles.control}>
      {children}
    </div>
  </div>
);

export default FormGroup;
