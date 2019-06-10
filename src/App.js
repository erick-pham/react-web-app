import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div id='main-wrapper'>
      <header id='header-wrapper' className="content-wrapper">
        <Header />
      </header>
      <section id='content-wrapper' className="content-wrapper">
        <Product />
      </section>
      <footer id='footer-wrapper' className="footer-wrapper">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
