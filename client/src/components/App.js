import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Menu from './Menu';
import Order from './Order';
import Payment from './payment';
import Thanks from './Thanks';

const App = () => (
  <Router>
    <div>
      <Route exact path={["/menu", "/"]} component={Menu} />
      <Route path="/order" component={Order} />
      <Route path="/payment" component={Payment} />
      <Route path="/thanks" component={Thanks} />
    </div>
  </Router>
);

export default App;
