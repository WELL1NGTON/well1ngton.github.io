import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import profilePicture from './profile_picture.jpeg';

const NavbarMyGHPages: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image src={profilePicture} width="50" height="50" className="d-inline-block align-middle" alt="React Bootstrap logo" roundedCircle />
        !!!EM CONSTRUÇÃO!!!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">Sobre</Nav.Link>
          <Nav.Link href="experience">Projetos</Nav.Link>
          <Nav.Link href="education">Educação</Nav.Link>
          <Nav.Link href="skills">Habilidades</Nav.Link>
          <Nav.Link href="interests">Interesses</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMyGHPages;
