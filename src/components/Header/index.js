import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Constants from "../../common/constants";
export default class Header extends Component {
  onClickLogout(event) {
    event.preventDefault();
    localStorage.setItem(Constants.AUTHORIZATION, null);
    console.log('logout');
    console.log(localStorage.getItem(Constants.AUTHORIZATION));
  }

  renderRightBar() {
    return (
      <ul className="nav navbar-nav navbar-right ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i><span className="caret"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="" onClick={(event) => this.onClickLogout(event)}>Logout</a>
            <a className="dropdown-item" href="">Profile</a>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">SignUp</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <section id="" className="">
        <nav className={'fixed-top navbar navbar-default navbar-expand-lg navbar-light'}>
          <div className="navbar-header d-flex col">
            <a className="navbar-brand" href={'/'}>Brand<b>Name</b></a>
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
            <form className="navbar-form form-inline">
              <div className="input-group search-box">
                <input type="text" id="search" className="form-control" placeholder="Search here..." />
                <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
              </div>
            </form>
            {this.renderRightBar()}
          </div>
        </nav>
      </section >
    );
  }
}
