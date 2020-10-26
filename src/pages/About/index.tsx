import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Gmail, Microsoftoutlook, Whatsapp, Telegram } from '@icons-pack/react-simple-icons';

const About: React.FC = () => {
  return (
    <>
      <Jumbotron className="m-3">
        Olá, eu sou
        <h1>Wellington Carlos Massola</h1>
        Desenvolvedor Front e Back-end
        <br />
        <br />
        <p>
          Sou um desenvolvedor com principal conhecimento em Java, javascript e C.
          <br />
          Me formei em Bacharelado em Ciência da computação na UNESP de Bauru em 2017.
        </p>
      </Jumbotron>
    </>
  );
};

export default About;
