import React from 'react';
import styles from './nav-item.scss';
import Icon from 'components/Icon';
import { NavItem as _NavItem } from 'react-bootstrap';

const Nav = ({ children, icon, ...props }) => (
  <_NavItem className={styles.navitem} {...props}>
    <div className={styles.container}>
      {icon && <Icon className={styles.icon} glyph={props.active ? `${icon}White` : `${icon}Purple`} />}
      {children}
    </div>
  </_NavItem>
);

export default Nav;
