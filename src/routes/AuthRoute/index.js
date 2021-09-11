import React from "react";

import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLayout from "../../pages/_layouts/Auth";

const LoginRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? (
          <AuthLayout>
            <Component {...props} />{" "}
          </AuthLayout>
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoginRoute;
