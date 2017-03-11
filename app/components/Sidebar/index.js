import React from 'react';
import styles from './sidebar.scss';
import classSet from 'classnames';

const SideBar = ({ children }) => (
  <div className={classSet(styles.container, styles.opened)}>
    <div className={classSet(styles.sidebar)}>
      {children}
    </div>
  </div>
);

export default SideBar;
