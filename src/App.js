import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  // BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product' 
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route exact path="/shop" element={<Shop></Shop>} />
          <Route path="/shop/:slug" element={<Product />} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      

    </div>
  );
}

export default App;
