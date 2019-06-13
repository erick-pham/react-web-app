/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import './style.css';
import LoginForm from './loginForm';
import { login } from './action';

class Login extends Component {
  constructor(props) {
    super(props);
    const { from } = props.location.state || { from: { pathname: '/' } };
    this.state = { token: this.props.token, email: 'bossdiemmaimai@gmail.com', password: '123456', showAlert: false, from: from };
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleChangeInputPasword = this.handleChangeInputPasword.bind(this);
    this.handleChangeInputEmail = this.handleChangeInputEmail.bind(this);
  }

  async handleClickLogin(event) {
    try {
      event.preventDefault();
      const { email, password } = this.state;
      const token = await this.props.doLogin(email, password);
      this.setState({ token });
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
    if (this.props.token) {
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

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (email, password) => {
      return login({ dispatch, email, password });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);