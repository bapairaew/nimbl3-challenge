import React from 'react';
import styles from './loading.scss';
import classSet from 'classnames';

const Loading = ({ className }) => (
  <div className={classSet(styles.loading, className)}></div>
);

export default Loading;
