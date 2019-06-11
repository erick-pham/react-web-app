import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Constants from '../../common/constants';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: false };
  }

  componentWillMount() {
    const token = localStorage.getItem(Constants.AUTHORIZATION);
    this.setState({ logged: token ? true : false });
  }
  onClickLogout(event) {
    localStorage.clear();
    //localStorage.removeItem(Constants.AUTHORIZATION)
    this.setState({ logged: false });
  }

  renderRightBar() {
    if (this.state.logged) {
      return (
        <ul className="nav navbar-nav navbar-right ml-auto">
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i><span className="caret"></span>
            </Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <Link to="#" className="dropdown-item" onClick={(event) => this.onClickLogout(event)}>Logout</Link>
              <Link className="dropdown-item" to="/profile">Profile</Link>
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">SignUp</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
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
    );
  }
}
