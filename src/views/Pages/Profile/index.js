import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Auth from '../../../api/auth';
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const profile = await this.getUserProfile(this.props.token);
    this.setState({
      avatar: profile.avatar,
      email: profile.email,
      firstName: profile.first_name,
      gender: profile.gender,
      id: profile.id,
      lastName: profile.last_name,
      username: profile.username
    });
  }

  getUserProfile = async (token) => {
    try {
      const response = await Auth.getUserProfile(token);
      return response.data;
    } catch (error) {
      // this.props.showPopup(MODAL_TYPE.error, error.message, true);
      console.log(new Error(error));
      return [];
    }
  };

  render() {
    return (
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={this.state.avatar} alt="user-img" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>
                  {this.state.firstName}
                </h5>
                <h6>
                  Web Developer and Designer
                </h6>
                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {/* <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                {/* <p>WORK LINK</p>
                <a href>Website Link</a><br />
                <p>SKILLS</p>
                <a href>Web Designer</a><br />
                <a href>WooCommerce</a><br />
                <a href>PHP, .Net</a><br /> */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.firstName + ' ' + this.state.lastName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer and Designer</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Your Bio</label><br />
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

UserProfile.propTypes = {
  token: PropTypes.string.isRequired
};

export default UserProfile;