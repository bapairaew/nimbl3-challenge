import React from 'react';
import styles from './naked-button.scss';
import classSet from 'classnames';

const NakedButton = ({ className, ...props }) => (
  <button className={classSet(styles.button, className)} {...props} />
);

export default NakedButton;
