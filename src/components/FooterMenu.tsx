'use client';

import { Row, Col, Form, Container, Button } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="bg-dark">
    <Container className="p-4">
      <Row>
        <Col>
          NAVIGATION
          <hr />
          <div>About us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          MAIN MENU
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          CONNECT
          <hr />
          {/* InputGroup, Form, Button */}
          <div>Sign up for our latest updates</div>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Enter Email Address"
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button variant="dark" type="submit">Join</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
