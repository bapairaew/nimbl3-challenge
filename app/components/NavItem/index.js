import React from 'react';
import styles from './nav-item.scss';
import Icon from 'components/Icon';
import { NavItem as _NavItem } from 'react-bootstrap';

const Nav = ({ children, icon, tailArrow, ...props }) => (
  <_NavItem className={styles.navitem} {...props}>
    <div className={styles.container}>
      {icon && <Icon className={styles.icon} glyph={props.active ? `${icon}White` : `${icon}Purple`} />}
      <div className={styles.mainContent}>{children}</div>
      {tailArrow && <Icon width={7} height={12} glyph={props.active ? `ArrowWhite` : `ArrowPurple`} />}
    </div>
  </_NavItem>
);

export default Nav;
