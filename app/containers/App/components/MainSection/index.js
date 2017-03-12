import React from 'react';
import styles from './main-section.scss';
import Card from 'components/Card';
import Remark from 'components/Remark';
import FullRemark from 'components/FullRemark';
import ProductTable from 'components/ProductTable';
import AutoSuggest from '../AutoSuggest';
import classSet from 'classnames';

const MainSection = ({ products }) => (
  <div>
    <div className={styles.subSection}>
      <Card>
        <AutoSuggest />
      </Card>
    </div>
    <div className={classSet(styles.subSection, 'visible-xs')}>
      <Remark />
    </div>
    <div className={styles.subSection}>
      <ProductTable products={products} />
    </div>
    <div className={styles.subSection}>
      <FullRemark />
    </div>
  </div>
);

export default MainSection;
