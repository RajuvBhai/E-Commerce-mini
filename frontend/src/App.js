import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div classNameName="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
