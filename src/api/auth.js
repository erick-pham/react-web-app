import jwt from 'jsonwebtoken';
import Users from '../mockdata/Users';
import _ from 'lodash';
import Messages from '../common/message';

const login = async (email, password) => {
  const userLogged = _.find(Users, user => {
    return user.email === email;
  });

  if (!userLogged) {
    return {
      error: true,
      message: Messages.USER_NOT_FOUND,
      data: null
    };

  }

  if (userLogged.password !== password) {
    return {
      error: true,
      message: Messages.PASSWORD_NOT_CORRECT,
      data: null
    };
  }

  const claim = { ...userLogged };
  const token = jwt.sign(claim, process.env.REACT_APP_JWT_SECRET, {
    expiresIn: process.env.REACT_APP_JWT_EXPIRY
  });

  return {
    error: false,
    message: null,
    data: token
  };
};

const getUserProfile = async (token) => {
  try {
    const fields = jwt.decode(token);
    return {
      error: false,
      message: null,
      data: fields
    };
  } catch (error) {
    throw error;
  }
};

export default {
  login: login,
  getUserProfile: getUserProfile
};