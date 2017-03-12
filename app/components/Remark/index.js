import React from 'react';
import styles from './remark.scss';
import classSet from 'classnames';

const Remark = () => (
  <div className={classSet(styles.remark, 'well')}>
    <h1 className={styles.header}>Remark</h1>
    <p className={styles.paragraph}>
      When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts.
    </p>
  </div>
);

export default Remark;
