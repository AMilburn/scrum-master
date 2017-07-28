import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './views/Login';
import Menu from './views/Menu';
import Cthulhu from './views/Cthulhu';
import StickyForm from './views/StickyForm';
import ProductBoard from './views/ProductBoard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/menu" component={Menu} />
    <Route path="/cthulhu" component={Cthulhu} />
    <Route path="/sticky" component={StickyForm} />
    <Route path="/board" component={ProductBoard} />
  </Route>
);