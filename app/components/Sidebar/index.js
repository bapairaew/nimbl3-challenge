import React from 'react';
import styles from './sidebar.scss';
import classSet from 'classnames';

const SideBar = ({ children, isOpened, onClosed = () => {} }) => (
  <div className={classSet(styles.container, isOpened && styles.opened)}
    onClick={onClosed}>
    <div className={classSet(styles.sidebar)}
      onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default SideBar;
