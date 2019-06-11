import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Constants from '../common/constants';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  const userLoggedIn = token && token !== '';
  return (
    <Route
      {...rest}
      render={props =>
        userLoggedIn ? (
          <Component {...props} token={token} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

function isAuthenticated() {
  const token = localStorage.getItem(Constants.AUTHORIZATION);
  const isAuthenticated = token ? true : false;
  return isAuthenticated;
}

// PrivateRoute.propTypes = {
//   component: PropTypes.Component,
// };

export {
  PrivateRoute,
  isAuthenticated
};
