import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SweetAlert from "sweetalert-react";
import "./style.css";
import UserService from "../../service/user";
import Constants from "../../common/constants";
import LoginForm from "./loginForm";

export default class Login extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem(Constants.AUTHORIZATION);
    console.log('token', token);
    this.state = { email: "bossdiemmaimai@gmail.com", password: "123456", logged: token ? true : false, showAlert: false };

    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleChangeInputPasword = this.handleChangeInputPasword.bind(this);
    this.handleChangeInputEmail = this.handleChangeInputEmail.bind(this);
  }

  componentWillMount() {
    //const a = sessionStorage.getItem("Authorization");
    // const b = localStorage.getItem("Authorization");
    // console.log(b);
  }

  componentDidMount() {
  }

  handleClickLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    UserService.login(email, password)
      .then(token => {
        localStorage.setItem(Constants.AUTHORIZATION, token);
      })
      .catch(error => {
        this.setState({
          showAlert: true,
          titleAlert: error
        })
      });
  };

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
    console.log(this.state.logged);

    if (this.state.logged) {
      console.log('Redirect');
      return <Redirect to='/' />
    } else {
      console.log('form');
      return this.renderForm()
    }
  }

  renderForm() {
    return (
      <div className="card">
        <article className="card-body">
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
        </article>
      </div>
    );
  }
}
