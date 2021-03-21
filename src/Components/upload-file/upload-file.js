import Button from "@material-ui/core/Button";
import FileViewer from "react-file-viewer";
import { useState } from "react";

const UploadFile = () => {
  const [selectedFile, setselectedFile] = useState("");
  let fileReader;

  const onFileChange = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  return (
    <div className="align-center">
      <Button variant="outlined" component="label" color="primary">
        Upload File
        <input type="file" hidden onChange={onFileChange} />
      </Button>
      <div>
        <span>Upload Pdf or Word File</span>
      </div>
      {/* <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={this.onError}/> */}
    </div>
  );
};
export default UploadFile;
