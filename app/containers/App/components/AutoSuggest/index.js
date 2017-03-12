import React from 'react';
import styles from './auto-suggest.scss';
import Icon from 'components/Icon';
import NakedInput from 'components/NakedInput';
import Loading from 'components/Loading';
import { Button, FormControl } from 'react-bootstrap';
import classSet from 'classnames';

const products = [
  {
    sku: 'TN SO 000015',
    description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
    brand: 'Schneider Electric',
    listPrice: 880
  },
  {
    sku: 'TN SO 000015',
    description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
    brand: 'Schneider Electric',
    listPrice: 880
  },
  {
    sku: 'TN SO 000015',
    description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
    brand: 'Schneider Electric',
    listPrice: 880
  }
];

const renderSuggestion = (product, index) => (
  <div key={index} className={styles.suggestion}>
    <div>{product.sku}</div>
    <div>{product.description}</div>
    <div>{product.brand}</div>
    <div>THB {product.listPrice.toLocaleString()}</div>
    <div>{product.brand}</div>
    <div className={styles.controls}>
      <FormControl className={styles.control} type="text" value={1} />
      <Button bsStyle="gray">Add</Button>
    </div>
  </div>
);

class AutoSuggest extends React.Component {
  constructor() {
    super();
    this.state = { isFocused: false, loading: false };
  }

  handleChange() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.setState({ loading: true });
    // MOCKUP
    this.timeout = setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { isFocused, loading } = this.state;
    return (
      <div className={styles.container}>
        { isFocused && <div className={styles.shadow}></div> }
        <div className={styles.autoSuggest}>
          { !loading && <Icon className={classSet(styles.icon, isFocused && styles.iconFocused)} glyph="IconPlus" /> }
          { loading && <Loading /> }
          <NakedInput className={styles.input} type="text" placeholder="Add Products"
            onChange={() => this.handleChange()}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })} />
          { isFocused && !loading &&
            <div className={styles.suggestions}>
              {products.map(renderSuggestion)}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default AutoSuggest;
