import axios from "axios";
import { useState } from "react";
const cookie = require("js-cookie");
export function Upload(props) {
  var [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    alert(selectedFile.name);
    const formData = new FormData();

    // Update the formData object
    formData.set("image", selectedFile);
    formData.append("fileName", selectedFile.name);
    formData.append("userEmail", cookie.get("user"));
    axios.post("/upload", formData);
    alert("Image Uploaded Sucessfully");
    alert("Message sent to senior");
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setSelectedFile(event.target.files[0]);
        }}
      />
      <button onClick={() => onFileUpload()}>upload</button>
    </div>
  );
}
