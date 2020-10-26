import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import profilePicture from './profile_picture.jpeg';

const NavbarPortifolio: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image src={profilePicture} width="50" height="50" className="d-inline-block align-middle" alt="React Bootstrap logo" roundedCircle />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">Sobre</Nav.Link>
          <Nav.Link href="experiencia">Experience</Nav.Link>
          <Nav.Link href="#link">Education</Nav.Link>
          <Nav.Link href="#link">Skills</Nav.Link>
          <Nav.Link href="#link">Intestests</Nav.Link>
          <Nav.Link href="#link">Awards</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPortifolio as Navbar;
