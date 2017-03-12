import React from 'react';
import styles from './remark.scss';
import classSet from 'classnames';

const Remark = () => (
  <div className={classSet(styles.remark, 'well')}>
    <h1 className={styles.header}>Remark</h1>
    <p className={styles.paragraph}>
      When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope. So to get us off of first base, let’s define some of the key terms that pertain to telescopes to help you be able to talk to them more intelligently.
    </p>
  </div>
);

export default Remark;
