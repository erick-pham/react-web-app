import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div id='main-wrapper'>
      <div id='header-wrapper'>
        <Header />
      </div>
      <div id='content-wrapper'>
        <Product />
      </div>
      <div id='footer-wrapper'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
