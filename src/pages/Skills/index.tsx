import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {
  Javascript,
  Java,
  Typescript,
  NodeDotJs,
  C,
  Cplusplus,
  Git,
  Android,
  Androidstudio,
  Godotengine,
  ReactJs,
  Linux,
} from '@icons-pack/react-simple-icons';

const About: React.FC = () => {
  return (
    <>
      <Jumbotron>
        <Javascript />
        <Typescript />
        <NodeDotJs />
        <Java />
        <C />
        <Cplusplus />
        <Android />
        <Androidstudio />
        <Godotengine />
        <ReactJs />
        <Linux />
        <Git />
      </Jumbotron>
    </>
  );
};

export default About;
