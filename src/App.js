import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuDetail from './components/MenuDetail';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
// forms
import OrderForm from './components/OrderForm';



import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/orderform" element={<OrderForm />} />
      </Routes>

    </Router>
  );
}

export default App;
