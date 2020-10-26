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
  Firebase,
  Mongodb,
  Linux,
} from '@icons-pack/react-simple-icons';

const About: React.FC = () => {
  return (
    <>
      <Jumbotron className="m-3">
        <Javascript color="#F7DF1E" />
        <Typescript color="#007ACC" />
        <NodeDotJs color="#339933" />
        <Java color="#007396" />
        <C color="#A8B9CC" />
        <Cplusplus color="#00599C" />
        <Android color="#3DDC84" />
        <Androidstudio color="#3DDC84" />
        <Godotengine color="#478CBF" />
        <ReactJs color="#61DAFB" />
        <Linux color="#FCC624" />
        <Firebase color="#FFCA28" />
        <Mongodb color="#47A248" />
        <Git color="#F05032" />
      </Jumbotron>
    </>
  );
};

export default About;
