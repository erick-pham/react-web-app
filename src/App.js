import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div id='main-wrapper'>
      <div id='header-wrapper' className="content-wrapper">
        <Header />
      </div>
      <div id='content-wrapper' className="content-wrapper">
        <Product />
      </div>
      <div id='footer-wrapper' className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
