import React from 'react';
import { connect } from 'react-redux';
import styles from './app.scss';
import Sidebar from 'components/Sidebar';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import NavHeader from 'components/NavHeader';
import NavFooter from 'components/NavFooter';
import NavMessage from 'components/NavMessage';
import HelloMessage from 'components/HelloMessage';
import AppBar from 'components/AppBar';
import MainContainer from 'components/MainContainer';
import Icon from 'components/Icon';
import { select } from './reducer';
import { openSidebar, closeSidebar } from './action';

const App = ({ user, order, isSidebarOpened, openSidebar, closeSidebar }) => (
  <div className={styles.container}>
    <Sidebar isOpened={isSidebarOpened} onClosed={closeSidebar}>
      <Nav bsStyle="pills" stacked activeKey={2} onSelect={index => { console.log(`${index} has been selected.`); }}>
        <NavHeader />
        <NavMessage className={'visible-xs'}>
          <HelloMessage {...user} />
        </NavMessage>
        <NavItem icon={'Controls'} eventKey={1}>Dashboard</NavItem>
        <NavItem icon={'ShoppingCart'} eventKey={2}>Orders</NavItem>
        <NavItem icon={'Factory'} tailArrow={true} eventKey={3}>Companies</NavItem>
        <NavItem icon={'Box'} eventKey={4}>Products</NavItem>
        <NavItem icon={'Document'} eventKey={5}>Documents</NavItem>
        <NavItem icon={'Hierarchy'} eventKey={6}>Pricing</NavItem>
        <NavItem icon={'Shapes'} eventKey={7}>Brands</NavItem>
        <NavItem icon={'Gear'} tailArrow={true} eventKey={8}>Settings</NavItem>
        <NavItem icon={'Chart'} eventKey={9}>Reports</NavItem>
        <NavItem icon={'People'} eventKey={10}>Account Users</NavItem>
        <NavItem eventKey={11}>Log out</NavItem>
        <NavFooter />
      </Nav>
    </Sidebar>
    <MainContainer>
      <AppBar
        className={'visible-xs'}
        onMenuClick={openSidebar}
        onSearchClick={() => { console.log('Search clicked!') }}>
        Edit {order.id}
      </AppBar>
      Hello World!
    </MainContainer>
  </div>
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    openSidebar: () => dispatch(openSidebar()),
    closeSidebar: () => dispatch(closeSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
