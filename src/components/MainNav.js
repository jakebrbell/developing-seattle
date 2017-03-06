import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';

class MainNav extends Component {
  render() {
    const styles = {
      hamburger: {
        height: '54px'
      },
      logo: {
        fontSize: '26px',
        height: '70px',
        lineHeight: '40px'
      },
      navbar: {
        borderRadius: 0,
        height: '70px'
      }
    };

    return (
      <Navbar fixedTop inverse style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a style={styles.logo}>Developing Seattle</a>
          </Navbar.Brand>
          <Navbar.Toggle style={styles.hamburger} />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight={true}>
            <NavItem eventKey={1}>Organizations</NavItem>
            <NavItem eventKey={2}>Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
