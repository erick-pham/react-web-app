/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SweetAlert from 'sweetalert-react';
import './style.css';
import UserService from '../../service/user';
import Constants from '../../common/constants';
import LoginForm from './loginForm';
import { isAuthenticated } from '../../helpers/authentication';

export default class Login extends Component {
  constructor(props) {
    super(props);
    const { from } = props.location.state || { from: { pathname: '/' } };
    console.log(from);
    this.state = { email: 'bossdiemmaimai@gmail.com', password: '123456', showAlert: false, from: from };
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleChangeInputPasword = this.handleChangeInputPasword.bind(this);
    this.handleChangeInputEmail = this.handleChangeInputEmail.bind(this);
  }

  async handleClickLogin(event) {
    try {
      event.preventDefault();
      const { email, password } = this.state;
      const token = await UserService.login(email, password);
      localStorage.setItem(Constants.AUTHORIZATION, token);
    } catch (error) {
      this.setState({
        showAlert: true,
        titleAlert: error
      });
    }
  }

  handleChangeInputPasword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleChangeInputEmail(event) {
    this.setState({
      email: event.target.value.toLowerCase()
    });
  }

  render() {
    if (isAuthenticated) {
      return <Redirect to='/' />;
    } else {
      return this.renderForm();
    }
  }

  renderForm() {
    return (
      <div>
        <SweetAlert
          show={this.state.showAlert}
          title=""
          text={this.state.titleAlert}
          onOutsideClick={() => this.setState({ showAlert: false })}
          onEscapeKey={() => this.setState({ showAlert: false })}
          onConfirm={() => this.setState({ showAlert: false })}
        />
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          handleClickLogin={this.handleClickLogin}
          handleChangeInputEmail={this.handleChangeInputEmail}
          handleChangeInputPasword={this.handleChangeInputPasword}
        />
      </div>
    );
  }
}
