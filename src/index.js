import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UserLogin from "./Components/login/login";
import SignUp from "./Components/sign-up/sign-up";
import Dashboard from "./Components/dashboard/dashboard";
import Country from "./Components/country-info/country-info";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SideBar from "./Components/side-bar/side-bar";
import History from "./Components/history/history";
import SavedTransalation from "./Components/saved-translation/saved-translation";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserLogin />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/dashboard">
          <SideBar />
          <Dashboard />
        </Route>
        <Route exact path="/country">
          <Country />
        </Route>
        <Route exact path="/history">
          <SideBar />

          <History />
        </Route>
        <Route exact path="/transalation">
          <SideBar />

          <SavedTransalation />
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
