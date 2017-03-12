import React from 'react';
import styles from './row.scss';
import classSet from 'classnames';
import { Row as _Row } from 'react-bootstrap';

const Row = ({ className, ...props }) => (
  <_Row className={classSet(styles.row, className)} {...props} />
);

export default Row;
