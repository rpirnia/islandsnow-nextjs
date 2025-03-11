'use client';

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const MiddleMenu = () => (
  <Navbar className="justify-content-center">
    <NavDropdown title={<span className="fw-bold">MEN</span>} id="nav-dropdown" className="mx-3">
      <NavDropdown.Item>Something</NavDropdown.Item>
      {/* <NavDropdown.Divider /> adds space to the dropdown */}
    </NavDropdown>
    <NavDropdown title={<span className="fw-bold">WOMEN</span>} id="nav-dropdown" className="mx-3">
      <NavDropdown.Item>Something</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title={<span className="fw-bold">KIDS</span>} id="nav-dropdown" className="mx-3">
      <NavDropdown.Item>Something</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title={<span className="fw-bold">BRANDS</span>} id="nav-dropdown" className="mx-3">
      <NavDropdown.Item>Something</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#search">
      <span className="fw-bold mx-3">SEARCH</span>
    </Nav.Link>
  </Navbar>
);

export default MiddleMenu;
