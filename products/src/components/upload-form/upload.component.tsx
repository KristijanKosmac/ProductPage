import React, { useState } from "react";
import "./upload.styles.scss";
import ImageUpload from "../upload-image/upload-image.component";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import { useHistory } from "react-router-dom";
import { wait } from "@testing-library/react";

interface FormInterface {
  title: string;
  price: number;
  id: string;
  history: any;
}

const Form = ({ title, price, id, history }: FormInterface) => {
  const [file, setFile]: any = useState(null);
  const [error, setError]: any = useState(null);
  const [select, setSelect] = useState(null);

  const type = ["image/png", "image/jpg", "image/jpeg"];

  const changeHandler = (e: any) => {
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

  function first() {
    setFile(select);
  }

  const onClickHandler = async () => {
    const result = await first();
    history.push("/");
  };
  return (
    <form>
      <label>Image</label>
      <input type="file" className="upload" onChange={changeHandler}></input>
      <div className="output">
        {error && <div className="error upload">{error}</div>}
        {file && <div className="upload">{file.name} </div>}
        {file && (
          <ImageUpload
            file={file}
            setFile={setFile}
            title={title}
            price={price}
            id={id}
          ></ImageUpload>
        )}
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={onClickHandler}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
