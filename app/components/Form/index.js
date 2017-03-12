import React from 'react';
import styles from './form.scss';

const Form = ({ children }) => (
  <div className={styles.form}>
    {children}
  </div>
);

export default Form;
