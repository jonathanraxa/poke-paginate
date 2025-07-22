
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { TopNavbarWhyModal } from './top-navbar-why-modal';
import './top-navbar.less';

export const TopNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">PokePaginate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleShow} style={{ cursor: 'pointer' }}>
                Why Did I Make This?
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TopNavbarWhyModal showModal={showModal} handleClose={handleClose} />
    </>
  );
};