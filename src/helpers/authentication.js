import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
