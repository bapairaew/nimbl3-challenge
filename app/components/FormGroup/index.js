import React from 'react';
import styles from './form-group.scss';
import classSet from 'classnames';

const FormGroup = ({ className, label, children }) => (
  <div className={classSet(styles.container, className)}>
    {label && <label className={styles.label}>{label}</label>}
    <div className={styles.control}>
      {children}
    </div>
  </div>
);

export default FormGroup;
