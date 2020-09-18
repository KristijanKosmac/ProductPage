import React, { useState } from "react";
import "./upload.styles.scss";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const type = ["image/png", "image/jpg", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };
  return (
    <form>
      <label for="exampleInputPassword1">Image</label>
      <input type="file" className="upload" onChange={changeHandler}></input>
      <div className="output">
        {error && <div className="error upload">{error}</div>}
        {file && <div className="upload">{file.name} </div>}
      </div>
    </form>
  );
};

export default Form;
