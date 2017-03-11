import React from 'react';
import styles from './app.scss';
import Sidebar from 'components/Sidebar';
import { Nav, NavItem } from 'react-bootstrap';

const App = () => (
  <div className={styles.container}>
    <Sidebar>
      <Nav bsStyle="pills" stacked activeKey={1} onSelect={() => {}}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    </Sidebar>
  </div>
);

export default App;
