import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import PrivateRoute from './helpers/authentication';
import ErrorBoundary from './helpers/errorBoundary';
//import routes from './routes';
const DefaultLayout = lazy(() => import('./views/DefaultLayout'));
const Admin = lazy(() => import('./views/Admin'));
const Login = lazy(() => import('./views/Pages/Login'));
const GForm = lazy(() => import('./views/Pages/GoogleForm/'));
const Profile = lazy(() => import('./views/Pages/Profile'));
const Register = lazy(() => import('./views/Pages/Register'));
const Page404 = lazy(() => import('./views/Pages/Page404'));
const Page500 = lazy(() => import('./views/Pages/Page500'));


class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={loading()}>
            <Switch>
              <PrivateRoute path='/profile' name='Profile' component={Profile} token={this.props.token} />
              <PrivateRoute path='/admin' name='Admin Page' component={Admin} token={this.props.token} />
              <Route exact path="/" name="Home Page" component={DefaultLayout} />
              <Route exact path="/gform" name="Login Page" component={GForm} />
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              <Route name="Page 404" component={Page404} />
            </Switch>
          </Suspense>
        </BrowserRouter >
      </ErrorBoundary>
    );
  }
}

function loading() {
  return <div>Loading...</div>;
}

App.propTypes = {
  token: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  token: state.auth.token,
  isLoading: state.api.isLoading
});

export default connect(mapStateToProps)(App);
