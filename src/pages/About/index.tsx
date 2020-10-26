import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const About: React.FC = () => {
  return (
    <>
      <Jumbotron>
        <h1>Wellington Carlos Massola</h1>
        <p>Rua Sampaio Bueno, 935 - Jaú/SP - (14) 98190-3527 - wellingtonmassola@gmail.com / wellingtonmassola@outlook.com</p>
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
