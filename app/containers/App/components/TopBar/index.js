import React from 'react';
import styles from './top-bar.scss';
import Icon from 'components/Icon';
import NakedInput from 'components/NakedInput';
import HelloMessage from 'components/HelloMessage';

const TopBar = ({ className, ...user}) => (
  <div className={className}>
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Icon className={styles.icon} glyph="MagnifyingGlass" />
        <NakedInput className={styles.input} type="text" placeholder="Search here" />
      </div>
      <div className={styles.helloContainer}>
        <HelloMessage {...user} />
      </div>
    </div>
  </div>
);

export default TopBar;
