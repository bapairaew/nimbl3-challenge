import React from 'react';
import styles from './product-table.scss';
import classSet from 'classnames';
import Icon from 'components/Icon';

const renderProductRow = (product) => (
  <tr>
    <td>{product.sku}</td>
    <td>{product.description}</td>
    <td>{product.brand}</td>
    <td>{product.listPrice === null ? <a className={styles.setPrice} href="#">Set Price</a> : product.listPrice}</td>
    <td>{`${(product.discount * 100).toLocaleString()}%`}</td>
    <td>{product.listPrice === null ? <a className={styles.setPrice} href="#">Set Price</a> :
        (product.listPrice * product.discount).toLocaleString()}</td>
    <td>{product.quantity}<Icon className={styles.editIcon} glyph="IconEdit" /></td>
    <td>{product.listPrice === null ? <a className={styles.setPrice} href="#">Set Price</a> :
      `THB ${(product.listPrice * (1 - product.discount) * product.quantity).toLocaleString()}`}</td>
    <td><a className={styles.removeItem} href="#">Remove Item</a></td>
  </tr>
)

const ProductTable = ({ products }) => (
  <div className={styles.container}>
    <table className={classSet(styles.table, 'table')}>
      <thead>
        <tr>
          <th width={150}>Sku</th>
          <th width={250}>Description</th>
          <th width={200}>Brand</th>
          <th width={100}>List price</th>
          <th width={100}>Discount</th>
          <th width={100}>Net price</th>
          <th width={80}>Qty</th>
          <th width={150}>Total</th>
          <th width={150}></th>
        </tr>
      </thead>
      <tbody>
        {products.map(renderProductRow)}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
