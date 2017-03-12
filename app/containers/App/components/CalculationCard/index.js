import React from 'react';
import styles from './calculation-card.scss';
import Card from 'components/Card';
import Row from 'components/Row';
import { Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

const CalculationCard = ({ estimatedDeliveryDate, subTotal, shipping, discount, tax }) => (
  <Card>
    <Form>
      <div className={styles.block}>
        <Row>
          <Col componentClass={ControlLabel} xs={7}>
            Estimated Delivery Date
          </Col>
          <Col xs={5}>
            <FormControl type="text" className={styles.control} placeholder="Estimated Delivery Date" value={estimatedDeliveryDate} />
          </Col>
        </Row>
      </div>
      <div className={styles.block}>
        <Row>
          <Col componentClass={ControlLabel} xs={7}>
            Sub-total
          </Col>
          <Col xs={5}>
            <div className={styles.subTotal}>{subTotal.toLocaleString()}</div>
          </Col>
        </Row>
        <Row>
          <Col componentClass={ControlLabel} xs={7}>
            Shipping
          </Col>
          <Col xs={5}>
            <FormControl type="text" className={styles.control} placeholder="Shipping" value={shipping} />
          </Col>
        </Row>
        <Row>
          <Col componentClass={ControlLabel} xs={7}>
            Special Discount
          </Col>
          <Col xs={5}>
            <FormControl type="text" className={styles.control} placeholder="Speacial Discount" value={discount.toLocaleString()} />
          </Col>
        </Row>
        <Row>
          <Col componentClass={ControlLabel} xs={7}>
            Tax
          </Col>
          <Col xs={5} className={styles.taxCol}>
            <div className={styles.tax}>
              <FormControl type="text" className={styles.control} placeholder="Tax" value={(tax * 100).toLocaleString()} />
            </div>
            <span className={styles.percentage}>%</span>
            <span className={styles.taxTail}>{(subTotal * tax).toLocaleString()}</span>
          </Col>
        </Row>
      </div>
      <div className={styles.block}>
        <Row>
          <Col componentClass={ControlLabel} xs={7}>
            <span className={styles.totalLabel}>Total</span>
          </Col>
          <Col xs={5}>
            <div className={styles.total}>THB {(subTotal * (1 + tax) - discount).toLocaleString()}</div>
          </Col>
        </Row>
      </div>
    </Form>
  </Card>
);

export default CalculationCard;
