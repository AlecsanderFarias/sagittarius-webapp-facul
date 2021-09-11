import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import LoginRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//Auth Routes
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

//Default Routes
import Dashboard from "../pages/Default/Dashboard";
import Account from "../pages/Default/Account";
import Extract from "../pages/Default/Extract";
import MakeOperation from "../pages/Default/MakeOperation";

//Public routes

import Home from "../pages/Public/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LoginRoute path="/" component={SignIn} exact />
        <LoginRoute path="/signUp" component={SignUp} exact />

        <PrivateRoute
          path="/account"
          isPrivate
          component={Dashboard}
          exact
          useCounts
        />
        <PrivateRoute
          path="/account/new"
          isPrivate
          component={Account}
          exact
          useCounts
        />
        <PrivateRoute
          path="/extract/:numeroConta"
          isPrivate
          component={Extract}
          exact
        />

        <PrivateRoute
          path="/operation"
          isPrivate
          component={MakeOperation}
          exact
        />

        <PublicRoute path="/home" isPrivate component={Home} exact />

        <PrivateRoute path="*" isPrivate component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
