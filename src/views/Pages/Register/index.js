import React, { Component } from 'react';
import './style.css';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'abc@gmail.com',
      emailError: '',
      password: '123456',
      passwordError: '',
      repeatPassword: '123456',
      repeatPasswordError: '',
      isCheck: false,
      isCheckError: 'Check this checkbox to continue.'
    };
  }

  handleClickRegister(event) {
    event.preventDefault();
    let { password, repeatPassword } = this.state;
    let emailError = '';
    let passwordError = '';
    let repeatPasswordError = '';


    if (!password || password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
      // this.inputPassword.setAttribute('class', 'form-control is-valid');
    }

    if (password !== repeatPassword) {
      repeatPasswordError = 'Password and repeat password do not match.';
    }

    if (passwordError) {
      this.inputPassword.setAttribute('class', 'form-control is-invalid');
    } else {
      this.inputPassword.setAttribute('class', 'form-control is-valid');
    }

    if (repeatPasswordError) {
      this.inputRepeatPassword.setAttribute('class', 'form-control is-invalid');
    } else {
      this.inputRepeatPassword.setAttribute('class', 'form-control is-valid');
    }

    this.setState({ emailError, passwordError, repeatPasswordError });

    // console.log(this.inputEmailGroup);
  }

  handleChangeInputEmail(event) {
    this.setState({
      email: event.target.value.toLowerCase()
    });
  }

  handleChangeInputPasword(event) {
    this.setState({
      password: event.target.value.toLowerCase()
    });

  }

  handleChangeInputRepeatPasword(event) {
    this.setState({
      repeatPassword: event.target.value.toLowerCase()
    });

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
                      value={this.state.email}
                      onChange={this.handleChangeInputEmail.bind(this)}
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
                      value={this.state.password}
                      onChange={this.handleChangeInputPasword.bind(this)}
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
                      value={this.state.repeatPassword}
                      onChange={this.handleChangeInputRepeatPasword.bind(this)}
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
