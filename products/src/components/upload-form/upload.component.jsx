import React, { useState } from "react";
import "./upload.styles.scss";
import ImageUpload from "../upload-image/upload-image.component";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

const Form = ({ title, price, id }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState(null);

  const type = ["image/png", "image/jpg", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && type.includes(selected.type)) {
      setSelect(selected);
      //setFile(selected);
      setError("");
    } else {
      setSelect(null);
      setFile(null);
      setError("Please select an image file");
    }
  };

  const onClickHandler = () => {
    setFile(select);
  };
  return (
    <form>
      <label for="exampleInputPassword1">Image</label>
      <input type="file" className="upload" onChange={changeHandler}></input>
      <div className="output">
        {error && <div className="error upload">{error}</div>}
        {file && <div className="upload">{file.name} </div>}
        {file && (
          <ImageUpload
            id={id}
            file={file}
            setFile={setFile}
            title={title}
            price={price}
          ></ImageUpload>
        )}
      </div>
      <button type="button" class="btn btn-primary" onClick={onClickHandler}>
        Submit
      </button>
    </form>
  );
};

export default Form;
