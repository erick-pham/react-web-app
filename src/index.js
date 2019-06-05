import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/sweetalert/dist/sweetalert.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginForm from './components/Login/login';
import SignUpForm from './components/SignUp/signup';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
