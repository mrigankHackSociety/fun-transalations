import "./sign-up.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [countryCodeArray, setCountryCodeArray] = useState([]);
  const [countryCode, setcountryCode] = useState("");
  const [signUpForm, setsignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    contactNumber: "",
  });
  const handleFormChange = (e) => {
    setsignUpForm({ ...signUpForm, [e.name]: e.value });
  };
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      if (res.data.length > 0) {
        setCountryCodeArray(res?.data);
        setcountryCode(res?.data[0]?.name);
      }
    });
  }, []);
  return (
    <div className="card sign-up-card">
      <h3>Sign Up</h3>
      <div>
        <TextField
          id="outlined-basic"
          label="First Name"
          name="firstName"
          className="form-field"
          variant="outlined"
          value={signUpForm.firstName}
          onChange={handleFormChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          name="lastName"
          value={signUpForm.lastName}
          className="form-field"
          variant="outlined"
          onChange={handleFormChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          value={signUpForm.email}
          className="form-field"
          variant="outlined"
          onChange={handleFormChange}
          required
        />
        <div className="contact-info">
          <FormControl variant="outlined" className="country-code">
            <InputLabel id="demo-simple-select-outlined-label">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Country"
              name="country"
              value={signUpForm.country}
              onChange={handleFormChange}
            >
              {countryCodeArray.map((item) => (
                <MenuItem key={item?.name} value={item?.name}>
                  <img
                    src={item?.flag}
                    alt={item.name}
                    className="country-flag"
                  />{" "}
                  <span className="country-name">{item?.name}</span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Contact Number"
            className="contact-number"
            variant="outlined"
            name="contactNumber"
            value={signUpForm.contactNumber}
            onChange={handleFormChange}
            required
          />
        </div>
      </div>
      <div className="sign-up-btn">
        <Button variant="outlined" color="primary" className="full-width">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
export default SignUp;
