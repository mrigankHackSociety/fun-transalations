import "./language-transalation.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const LanguageTransalation = () => {
  const [text, setText] = useState("");
  const [error, seterror] = useState("");
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [transalatedText, settransalatedText] = useState("");
  const transalateText = () => {
    if (!!text) {
      axios
        .post(`https://api.funtranslations.com/translate/yoda.json`, null, {
          params: { text: text },
        })
        .then((res) => {
          settransalatedText(res?.data?.contents?.translated);
        })
        .catch((reason) => {
          seterror(reason?.response?.data?.error?.message);
          setopenSnackbar(true);
        });
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClose = () => {
    setopenSnackbar(false);
  };
  return (
    <div className="align-center">
      <textarea
        id="w3review"
        name="w3review"
        rows="17"
        cols="100"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="transalate-btn">
        <Button variant="outlined" color="primary" onClick={transalateText}>
          Transalate
        </Button>
      </div>
      <div>
      {!!transalatedText && transalatedText}
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default LanguageTransalation;
