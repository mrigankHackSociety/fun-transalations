export default function ValidateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
      errors.firstName = "First Name is Required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name is Required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please Enter Valid Email";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be minimum 8 characters";
  }
  if (!values.country) {
    errors.country = "Country is Required";
  }
  if (!values.contactNumber) {
    errors.contactNumber = "Contact Number is Required";
  }
  return errors;
}
