import React from 'react';
import styles from './nav-header.scss';
import Icon from 'components/Icon';

const NavHeader = () => (
  <li className={styles.container}>
    <Icon glyph="LogoWhite" width={158} height={50} />
  </li>
);

export default NavHeader;
