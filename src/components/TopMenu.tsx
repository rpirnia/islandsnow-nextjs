'use client';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from "react-bootstrap-icons"

const TopMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-dark"><Facebook/></Nav.Link>
          <Nav.Link className="text-dark"><Twitter/></Nav.Link>
          <Nav.Link className="text-dark"><Pinterest/></Nav.Link>
          <Nav.Link className="text-dark"><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="text-dark"><HouseFill/> </Nav.Link>
          <Nav.Link className="text-dark"><Search/> </Nav.Link>
          <Nav.Link className="text-dark"><PersonFill/> </Nav.Link>
          <NavDropdown className="text-dark" title={<Cart/>}>
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );

export default TopMenu;