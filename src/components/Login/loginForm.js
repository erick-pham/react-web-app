import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class LoginForm extends Component {
  render() {
    return (
      < form onSubmit={this.props.handleClickLogin} >
        <div className="form-login">
          <p className="hint-text">Sign in with your social media account</p>
          <div className="form-group social-btn clearfix">
            <a href="/" className="btn btn-primary pull-left">
              <i className="fa fa-facebook" /> Facebook
            </a>
            <a href="/" className="btn btn-info pull-right">
              <i className="fa fa-twitter" /> Twitter
            </a>
          </div>
          <div className="or-seperator">
            <b>or</b>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required="required"
              value={this.props.email}
              onChange={this.props.handleChangeInputEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              value={this.props.password}
              onChange={this.props.handleChangeInputPasword}
            />
          </div>
          <input type="submit" className="btn btn-primary btn-block" value="Login" />
          <div className="form-footer">
            <Link to="/">Forgot Your password?</Link>
          </div>
        </div>
      </form >);
  }
}
