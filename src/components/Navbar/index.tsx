import React, { useState } from 'react';
import { Navbar, Nav, Image, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import profilePicture from './profile_picture.jpeg';
import { useTranslation } from 'react-i18next';
import { InputGroup, FormControl } from 'react-bootstrap';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const NavbarMyGHPages: React.FC = () => {
  const [selectedFlag, setCurrentFlag] = useState<'BR' | 'US'>('BR');
  const { t, i18n } = useTranslation();

  i18n.on('languageChanged', (lng) => {
    if (lng === 'pt') setCurrentFlag('BR');
    if (lng === 'en') setCurrentFlag('US');
  });

  const changeLanguage = (flag: 'US' | 'BR') => {
    if (flag === 'BR') i18n.changeLanguage('pt');
    if (flag === 'US') i18n.changeLanguage('en');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image src={profilePicture} width="50" height="50" className="d-inline-block align-middle" alt="React Bootstrap logo" roundedCircle />
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
      <Navbar.Brand>
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} title={getUnicodeFlagIcon(selectedFlag)} id="set-language-nested-dropdown" drop={'left'}>
            <Dropdown.Item eventKey="US" value={'US'} onClick={() => changeLanguage('US')}>
              {`${getUnicodeFlagIcon('US')} English`}
            </Dropdown.Item>
            <Dropdown.Item eventKey="BR" value={'BR'} onClick={() => changeLanguage('BR')}>{`${getUnicodeFlagIcon('BR')} Português`}</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarMyGHPages;
