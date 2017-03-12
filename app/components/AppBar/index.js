import React from 'react';
import styles from './app-bar.scss';
import Icon from 'components/Icon';
import HamburgerIcon from 'components/HamburgerIcon';
import NakedButton from 'components/NakedButton';

const AppBar = ({ children, className, onMenuClick = () => {}, onSearchClick = () => {} }) => (
  <div className={className}>
    <div className={styles.container}>
      <NakedButton onClick={onMenuClick}>
        <HamburgerIcon className={styles.icon} />
      </NakedButton>
      <div>{children}</div>
      <NakedButton onClick={onSearchClick}>
        <Icon className={styles.icon} glyph="MagnifyingGlass" />
      </NakedButton>
    </div>
  </div>
);

export default AppBar;
