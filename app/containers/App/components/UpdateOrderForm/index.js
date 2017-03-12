import React from 'react';
import styles from './update-order-form.scss';
import FormGroup from 'components/FormGroup';
import DropdownButton from 'components/DropdownButton';
import Company from 'components/Company';
import { Button } from 'react-bootstrap';
import classSet from 'classnames';

const UpdateOrderForm = ({ company, type, createdBy, status }) => (
  <form className={styles.form}>
    <div className={styles.subForm}>
      <FormGroup className={'visible-sm visible-md visible-lg'}>
        <Button bsStyle="link" className={styles.link} type="submit" bsSize="large">Back</Button>
      </FormGroup>
      <FormGroup>
        <Button bsStyle="gray" type="submit" bsSize="large">Update Order</Button>
      </FormGroup>
    </div>
    <div className={classSet(styles.subForm, styles.well, 'well')}>
      <Company {...company} className={classSet(styles.company, 'visible-sm visible-md visible-lg')} />
      <FormGroup label="Type" className={classSet(styles.dropdownGroup, 'visible-sm visible-md visible-lg')}>
        <DropdownButton id="type" title={type} bsSize="large" block />
      </FormGroup>
      <FormGroup label="Created By" className={styles.dropdownGroup}>
        <DropdownButton id="createdBy" title={createdBy} bsSize="large" block />
      </FormGroup>
      <FormGroup label="Status" className={styles.dropdownGroup}>
        <DropdownButton id="status" title={status} bsSize="large" block />
      </FormGroup>
    </div>
  </form>
);

export default UpdateOrderForm;
