import React, { Component } from 'react';
import './style.css';
export default class SignUp extends Component {
  render() {
    return (
      <div className='form-signup'>
        <p className='hint-text'>Fill in this form to create your account!</p>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Username' required='required' />
        </div>
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password' required='required' />
        </div>
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Confirm Password' required='required' />
        </div>
        <div className='form-group'>
          <label className='checkbox-inline'><input type='checkbox' required='required' /> I accept the <a href='/'>Terms &amp; Conditions</a></label>
        </div>
        <input type='submit' className='btn btn-primary btn-block' defaultValue='Sign up' />
      </div>
    );
  }
}
