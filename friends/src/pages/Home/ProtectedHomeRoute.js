import React from 'react';
import Home from './Home'
import { Route, Redirect } from 'react-router-dom';

const ProtectedHomeRoute = () => {
  return (
    <Route
      exact
      path="/"
      render={routeProps => {
        if (localStorage.getItem("token")) {
          return <Home />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedHomeRoute;
