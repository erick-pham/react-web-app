import React, { Component } from 'react';
import './style.css';
export default class Login extends Component {
  //called before render().
  //Dựa vào các props để tính toán và set lại state
  componentWillMount() {

  }
  render() {
    return (
      <div className='form-login'>
        <p className="hint-text">Sign in with your social media account</p>
        <div className="form-group social-btn clearfix">
          <a href="/" className="btn btn-primary pull-left"><i className="fa fa-facebook"></i> Facebook</a>
          <a href="/" className="btn btn-info pull-right"><i className="fa fa-twitter"></i> Twitter</a>
        </div>
        <div className="or-seperator"><b>or</b></div>
        <div className="form-group">
          <input type="text" class="form-control" placeholder="Username" required="required" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="required" />
        </div>
        <input type="submit" className="btn btn-primary btn-block" value="Login" />
        <div className="form-footer">
          <a href="/">Forgot Your password?</a>
        </div>
      </div>
    );
  }
}
