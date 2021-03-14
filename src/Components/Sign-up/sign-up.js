import "./sign-up.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../useForm";
import validate from "../../validateInfo";
import FormHelperText from "@material-ui/core/FormHelperText";

const SignUp = () => {
  const [countryCodeArray, setCountryCodeArray] = useState([]);
  const [countryCode, setcountryCode] = useState("");
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
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
          placeholder="First Name"
          className="form-field"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          error={errors?.firstName}
          helperText={errors?.firstName}
          required
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          value={values?.lastName}
          className="form-field"
          variant="outlined"
          error={errors?.lastName}
          helperText={errors?.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          placeholder="Email"
          value={values?.email}
          className="form-field"
          variant="outlined"
          helperText={errors?.email}
          error={errors?.email}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          placeholder="Enter Password"
          value={values?.password}
          className="form-field"
          variant="outlined"
          type="password"
          helperText={errors?.password}
          error={errors?.password}
          onChange={handleChange}
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
              placeholder="Country"
              value={countryCode}
              onChange={handleChange}
            >
              {countryCodeArray.map((item) => (
                <MenuItem key={item?.name} value={item?.name}>
                  <img
                    src={item?.flag}
                    alt={item?.name}
                    className="country-flag"
                  />
                  <span className="country-name">{item?.name}</span>
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors?.country}</FormHelperText>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Contact Number"
            className="contact-number"
            placeholder="Contact Number"
            variant="outlined"
            name="contactNumber"
            value={values?.contactNumber}
            helperText={errors?.contactNumber}
            error={errors?.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="sign-up-btn">
        <Button
          variant="outlined"
          color="primary"
          className="full-width"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};
export default SignUp;
