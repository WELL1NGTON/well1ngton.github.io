import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from '../../pages/About';

const RouterMyGHPage: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default RouterMyGHPage;
