import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './helpers/authentication';
// Pages
import {
  Login,
  Profile,
  Page404,
  Page500,
  Register
} from './views/Pages';
import DefaultLayout from './views/DefaultLayout';
import Admin from './views/Admin';
import { connect } from 'react-redux';
//import PrivateRoute from './helpers/authentication';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path='/profile' name='Profile' component={Profile} token={this.props.token} />
          <PrivateRoute path='/admin' name='Admin' component={Admin} token={this.props.token} />
          <Route exact path="/" name="Home Page" component={DefaultLayout} />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route name="Page 404" component={Page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(App);
