import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route exact path="/shop" element={<Shop></Shop>} />
          {/* <Route path="/products/:slug" element={<Product />} /> */}
          <Route path="/about" element={<About></About>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
