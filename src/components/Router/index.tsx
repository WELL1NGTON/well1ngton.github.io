import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from '../../pages/About';
import Education from '../../pages/Education';
import Skills from '../../pages/Skills';

const RouterMyGHPage: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </Router>
  );
};

export default RouterMyGHPage;