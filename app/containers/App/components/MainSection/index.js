import React from 'react';
import styles from './main-section.scss';
import Card from 'components/Card';
import Remark from 'components/Remark';
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
    <div className={styles.subSection}>
      <Remark />
    </div>
    <div className={styles.subSection}>
      <ProductTable products={products} />
    </div>
  </div>
);

export default MainSection;
