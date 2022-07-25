import 'normalize.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import { selectCartItems } from './redux/cart/selectors';

function App() {
  const cartItems = useSelector(selectCartItems);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="wrapper">
      <Header />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:category" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
