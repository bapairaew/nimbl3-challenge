import React from 'react';
import styles from './naked-input.scss';
import classSet from 'classnames';

const NakedInput = ({ className, ...props }) => (
  <input className={classSet(styles.input, className)} {...props} />
);

export default NakedInput;
