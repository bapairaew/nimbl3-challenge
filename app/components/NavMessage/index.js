import React from 'react';
import styles from './nav-message.scss';
import classSet from 'classnames';

const NavMessage = ({ children, className }) => (
  <li className={classSet(styles.container, className)}>
    {children}
  </li>
);

export default NavMessage;
