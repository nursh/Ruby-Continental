import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './Home';
import Menu from './Menu';
import Order from './Order';
import Payment from './payment';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route path="/order" component={Order} />
      <Route path="/payment" component={Payment} />
    </div>
  </Router>
);

export default App;
