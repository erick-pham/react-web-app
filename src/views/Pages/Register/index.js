import React, { Component } from 'react';
import './style.css';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: 'Please fill out this field.',
      password: '',
      passwordError: 'Please fill out this field.',
      repeatPassword: '',
      repeatPasswordError: 'Please fill out this field.',
      isCheck: false,
      isCheckError: 'Check this checkbox to continue.'
    };
  }
  handleClickRegister(event) {
    event.preventDefault();
    this.setState({
      emailError: 'aaaaaaaaaaaaaaa',
      passwordError: '',
      repeatPasswordError: ''
    });

    this.inputEmail.setAttribute('class', 'form-control is-invalid');
    this.inputPassword.setAttribute('class', 'form-control is-valid');
    this.inputRepeatPassword.setAttribute('class', 'form-control is-valid');
    console.log(this.inputEmailGroup);
  }

  handleChangeInputEmail() {

  }
  render() {
    return (
      <section className='container' >
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" onSubmit={(event) => this.handleClickRegister(event)} >
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      ref={input => { this.inputEmail = input; }}
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="abc@gmail.com"
                      required
                      autoFocus
                    //value={this.state.email}
                    // onChange={this.handleChangeInputEmail} 
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">{this.state.emailError}</div>
                  </div>

                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      ref={input => { this.inputPassword = input; }}
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    // value={this.state.password}
                    //onChange={this.handleChangeInputPasword} 
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">{this.state.passwordError}</div>
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputRepeatPassword">Repeat password</label>
                    <input
                      ref={input => { this.inputRepeatPassword = input; }}
                      type="password"
                      id="inputRepeatPassword"
                      className="form-control"
                      placeholder="Repeat Password"
                      required
                    //value={this.state.repeatPassword}
                    //onChange={this.handleChangeInputPasword} 
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">{this.state.repeatPasswordError}</div>
                  </div>
                  <div className="form-group form-check">
                    <label className="form-check-label">
                      <input className="form-check-input is-invalid" type="checkbox" name="remember" required /> I agree on blabla.
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">{this.state.isCheckError}</div>
                    </label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}
