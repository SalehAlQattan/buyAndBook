// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// router
import { Route, Switch } from 'react-router';

// components
import Home from './home/Home';
import ProductList from './product/ProductList';
import ProductDetails from './product/ProductDetails';

const Routes = () => {
  return (
    <Switch>
      <Route path='/products/:productSlug'>
        <ProductDetails />
      </Route>
      <Route path='/products'>
        <ProductList />
      </Route>
      {/* the home route should be the last route */}
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
