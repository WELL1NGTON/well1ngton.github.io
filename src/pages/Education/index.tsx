import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const About: React.FC = () => {
  return (
    <>
      <Jumbotron className="m-3">
        <h1>Educação</h1>
        <br />
        <h3>
          Bacharelado em Ciência da computação.
          <br />
          Universidade Estadual Paulista “Júlio de Mesquita Filho” (UNESP), Bauru, SP
          <br />
          (conclusão em março de 2017)
        </h3>
      </Jumbotron>
    </>
  );
};

export default About;
