import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Product from '../components/Product/Product';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <Header />
        </div>
        <div className='app-body'>
          <article className='left-bar'>
          </article>
          <section className='main-content container-fluid'>

            <Product />
          </section>
          <article className='right-bar'>
          </article>
        </div>
        <div className='app-header'>
          <Footer />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  token: PropTypes.string
};

// function mapStateToProps(state) {
//   return {
//     token: state.auth.token,
//   };
// }

// export default connect(
//   mapStateToProps,
//   null
// )(Home);