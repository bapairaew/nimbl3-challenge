import React from 'react';
import styles from './card.scss';
import classSet from 'classnames';

const Card = ({ className, children }) => (
  <div className={classSet(styles.card, className)}>
    {children}
  </div>
);

export default Card;
