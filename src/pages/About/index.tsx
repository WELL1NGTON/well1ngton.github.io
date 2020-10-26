import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const About: React.FC = () => {
  return (
    <>
      <Jumbotron className="m-3">
        Olá, eu sou
        <h1>Wellington Carlos Massola</h1>
        Desenvolvedor Front e Back-End
        <br />
        <br />
        <p>
          Sou formado em Bacharelado em Ciência da Computação pela UNESP de Bauru. Meu TCC foi sobre o uso de programação não linear para o dimensionamento de
          biodigestores indianos (Desenvolvido utilizando Java).
        </p>
        <p>
          Trabalhei nos últimos anos com logística, mas atualmente estou procurando emprego como desenvolvedor (Java/Javascript/C) e estou trabalhando em
          projetos pessoais e freelance no momento.
        </p>
        <p>Atualmente estudando AWS Lambda e S3 e estou interessado principalmente em focar no desenvolvimento para back-end.</p>
      </Jumbotron>
    </>
  );
};

export default About;
