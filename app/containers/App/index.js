import React from 'react';
import styles from './app.scss';
import Sidebar from 'components/Sidebar';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import NavHeader from 'components/NavHeader';
import NavFooter from 'components/NavFooter';
import Icon from 'components/Icon';

const App = () => (
  <div className={styles.container}>
    <Sidebar>
      <Nav bsStyle="pills" stacked activeKey={2} onSelect={index => { console.log(`${index} has been selected.`); }}>
        <NavHeader />
        <NavItem icon={'Controls'} eventKey={1}>Dashboard</NavItem>
        <NavItem icon={'ShoppingCart'} eventKey={2}>Orders</NavItem>
        <NavItem icon={'Factory'} eventKey={3}>Companies</NavItem>
        <NavItem icon={'Box'} eventKey={4}>Products</NavItem>
        <NavItem icon={'Document'} eventKey={5}>Documents</NavItem>
        <NavItem icon={'Hierarchy'} eventKey={6}>Pricing</NavItem>
        <NavItem icon={'Shapes'} eventKey={7}>Brands</NavItem>
        <NavItem icon={'Gear'} eventKey={8}>Settings</NavItem>
        <NavItem icon={'Chart'} eventKey={9}>Reports</NavItem>
        <NavItem icon={'People'} eventKey={10}>Account Users</NavItem>
        <NavItem eventKey={11}>Log out</NavItem>
        <NavFooter />
      </Nav>
    </Sidebar>
    <div style={{ height: 1400 }}></div>
  </div>
);

export default App;
