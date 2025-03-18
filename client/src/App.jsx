import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductsPage from './pages/Products/Products'
import SearchResults from './components/SearchResults/SearchResults';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from './pages/Basket/Basket';
import AdminPage from './pages/Admin/AdminPage'
import SiteLayout from './layout/SiteLayout';
import AdminLayout from './layout/AdminLayout';
import AdminNewProdPage from './pages/Admin/AdminNewProdPage/AdminNewProdPage'
import Checkout from './pages/Checkout/Checkout';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(resp => resp.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  function getSQLiteTimestamp() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

  return (

    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home products={products} getSQLiteTimestamp={getSQLiteTimestamp} />} />
          <Route path="/products/:item_url" element={<ProductsPage products={products} />} />
          <Route path="/search" element={<SearchResults products={products} />} />
          <Route path='/basket' element={<Basket products={products} />} /> 
          <Route path='/checkout' element={<Checkout products={products} />} /> 
        </Route>

        <Route element={<AdminLayout />} >
          <Route path="/admin/products" element={<AdminPage products={products}/>} />
          <Route path="/admin/products/new" element={<AdminNewProdPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
