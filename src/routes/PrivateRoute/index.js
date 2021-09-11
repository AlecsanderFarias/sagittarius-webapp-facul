import React from "react";

import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import DefaultLayout from "../../pages/_layouts/Default";

const PrivateRoute = ({ component: Component, noMax, useCounts, ...rest }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <DefaultLayout noMax={noMax} useCounts={useCounts}>
            <Component {...props} />
          </DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
