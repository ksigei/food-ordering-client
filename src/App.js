import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MenuProvider } from './contexts/MenuContext';
import { OrderProvider } from './contexts/OrderContext'
import MenuList from './components/MenuList';
import OrderList from './components/OrderList';
import MenuDetailPage from './pages/MenuDetailPage';
import OrderDetailPage from './pages/OrderDetailPage';

const App = () => {
  return (
    <Router>
      <MenuProvider>
        <OrderProvider>
          <div>
            <h1>Food Ordering App</h1>
            <Switch>
              <Route exact path="/" component={MenuList} />
              <Route exact path="/menu/:menuId" component={MenuDetailPage} />
              <Route exact path="/order/:orderId" component={OrderDetailPage} />
            </Switch>
            <OrderList />
          </div>
        </OrderProvider>
      </MenuProvider>
    </Router>
  );
};

export default App;
