import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Router from './components/Router';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />

      <div>{t('hello')}</div>
      <Router />
    </>
  );
}

export default App;
