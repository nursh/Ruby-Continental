import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Menu from './Menu';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Menu} />
    </div>
  </Router>
);

export default App;
