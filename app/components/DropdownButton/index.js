import React from 'react';
import styles from './dropdown-button.scss';
import { DropdownButton as _DropdownButton } from 'react-bootstrap';
import classSet from 'classnames';

const DropdownButton = ({ className, ...props}) => (
  <_DropdownButton className={classSet(styles.dropdown, className)} {...props} />
);

export default DropdownButton;
