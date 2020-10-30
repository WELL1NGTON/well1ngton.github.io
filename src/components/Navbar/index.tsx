import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import profilePicture from './profile_picture.jpeg';

const NavbarMyGHPages: React.FC = () => {
  const [selectedFlag, setCurrentFlag] = useState<'BR' | 'US'>('BR');
  const { i18n } = useTranslation();

  i18n.on('languageChanged', (lng) => {
    if (lng === 'pt') setCurrentFlag('BR');
    if (lng === 'en') setCurrentFlag('US');
  });

  const changeLanguage = (flag: 'US' | 'BR') => {
    if (flag === 'BR') i18n.changeLanguage('pt');
    if (flag === 'US') i18n.changeLanguage('en');
  };

  return (
    <>
      !!!EM CONSTRUÇÃO!!!
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <Image src={profilePicture} width="50" height="50" className="d-inline-block align-middle" alt="React Bootstrap logo" roundedCircle />
          </Link>
        </Navbar.Brand>
        <Navbar className="ml-auto">
          <Nav.Item> </Nav.Item>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">
              <Trans i18nKey={'navbar.about'} />
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <Trans i18nKey={'navbar.projects'} />
            </Nav.Link>
            <Nav.Link as={Link} to="/education">
              <Trans i18nKey={'navbar.education'} />
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              <Trans i18nKey={'navbar.skills'} />
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/interests">
              <Trans i18nKey={'navbar.interests'} />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

        <ButtonGroup>
          <DropdownButton as={ButtonGroup} title={getUnicodeFlagIcon(selectedFlag)} id="set-language-nested-dropdown" drop={'left'}>
            <Dropdown.Item eventKey="US" value={'US'} onClick={() => changeLanguage('US')}>
              {`${getUnicodeFlagIcon('US')} English`}
            </Dropdown.Item>
            <Dropdown.Item eventKey="BR" value={'BR'} onClick={() => changeLanguage('BR')}>{`${getUnicodeFlagIcon('BR')} Português`}</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </Navbar>
    </>
  );
};

export default NavbarMyGHPages;
