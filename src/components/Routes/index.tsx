import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../pages/About';
import Education from '../../pages/Education';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

const RouterMyGHPage: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/about" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

export default RouterMyGHPage;
