import React from 'react';
import styles from './nav.scss';
import { Nav as _Nav } from 'react-bootstrap';

const Nav = ({ children, ...props }) => (
  <_Nav className={styles.nav} {...props}>
    {children}
  </_Nav>
);

export default Nav;
