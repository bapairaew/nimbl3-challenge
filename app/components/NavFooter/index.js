import React from 'react';
import styles from './nav-footer.scss';
import Icon from 'components/Icon';

const NavFooter = () => (
  <li className={styles.container}>
    <div>Powered by</div>
    <Icon glyph="LogoWhite" width={107} height={34} />
  </li>
);

export default NavFooter;
