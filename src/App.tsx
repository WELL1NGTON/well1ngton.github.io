import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/About';
import Navbar from './components/Navbar';

// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
