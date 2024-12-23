import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Home/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
