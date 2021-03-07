import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UserLogin from './Login/login';
import SignUp from './Sign-up/sign-up'
import Dashboard from './Dashboard/dashboard'
import { Route, Switch, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <UserLogin/>
      </Route>
      <Route exact path="/sign-up">
        <SignUp/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
