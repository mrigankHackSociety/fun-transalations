import React from "react";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";

const UserLogin = () => {
  const routehistory = useHistory();
  const navigateToDashboard = () => {
    routehistory.push("/dashboard");
  };

  return (
    <div className="container">
      <div className="card login-card">
        <div>
          <div className="align-center padding-bottom">Login</div>
          <div>
            <div className="padding-bottom">
              <TextField
                id="outlined-basic"
                label="User Name"
                className="full-width "
                variant="outlined"
              />
            </div>
            <div className="padding-bottom">
              <TextField
                id="outlined-basic"
                label="Password"
                className="full-width padding-bottom"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              color="primary"
              className="full-width"
              onClick={navigateToDashboard}
            >
              Login
            </Button>
          </div>
          <div className="sign-up">
            If you are not register. Please <Link to="/sign-up" className="navigation">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
