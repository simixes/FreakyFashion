import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/api/products")
    .then(resp => resp.json())
    .then(data => {
      setProducts(data);
    });

  }, []);


  return (
    <Router>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App
