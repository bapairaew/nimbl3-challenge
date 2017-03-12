import React from 'react';
import Form from 'components/Form';
import FormGroup from 'components/FormGroup';
import DropdownButton from 'components/DropdownButton';
import { Button } from 'react-bootstrap';

const UpdateOrderForm = ({ createdBy, status }) => (
  <Form>
    <FormGroup>
      <Button bsStyle="gray" type="submit" bsSize="large">Update Order</Button>
    </FormGroup>
    <FormGroup label="Created By">
      <DropdownButton id="createdBy" title={createdBy} bsSize="large" block />
    </FormGroup>
    <FormGroup label="Status">
      <DropdownButton id="status" title={status} bsSize="large" block />
    </FormGroup>
  </Form>
);

export default UpdateOrderForm;
