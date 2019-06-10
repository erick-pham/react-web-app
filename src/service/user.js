const jwt = require("jsonwebtoken");
const Users = require("../mockdata/Users");
const _ = require("lodash");
const Messages = require("../common/message");

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    const userLogged = _.find(Users, user => {
      return user.email === email;
    });

    if (!userLogged) {
      return reject(Messages.USER_NOT_FOUND);
    }

    if (userLogged.password !== password) {
      return reject(Messages.PASSWORD_NOT_CORRECT);
    }

    const claim = { ...userLogged };
    const token = jwt.sign(claim, process.env.REACT_APP_JWT_SECRET, {
      expiresIn: process.env.REACT_APP_JWT_EXPIRY
    });
    resolve(token);
  });
};

const getUserProfile = async (token) => {
  try {
    const fields = jwt.decode(token);
    return fields;
  } catch (error) {
    throw error;
  }
}

export default {
  login: login,
  getUserProfile: getUserProfile
};
