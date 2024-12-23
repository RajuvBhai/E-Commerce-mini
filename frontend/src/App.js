import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div classNameName="App">
      <Router>
        <div>
          <Header cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
