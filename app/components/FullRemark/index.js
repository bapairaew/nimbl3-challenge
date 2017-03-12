import React from 'react';
import styles from './full-remark.scss';
import classSet from 'classnames';

const FullRemark = ({ className }) => (
  <div className={classSet(styles.fullRemark, className)}>
    <h1 className={styles.header}>Remark</h1>
    <div className={classSet(styles.well, 'well')}>
      <p className={styles.paragraph}>
        When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope. So to get us off of first base, let’s define some of the key terms that pertain to telescopes to help you be able to talk to them more intelligently.
      </p>
    </div>
  </div>
);

export default FullRemark;
