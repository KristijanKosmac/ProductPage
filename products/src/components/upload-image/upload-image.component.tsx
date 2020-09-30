import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import "./upload-image.styles.scss";

interface ImgaeInterface {
  file: any;
  setFile: any;
  title: string;
  price: number;
  id: string;
}

const ImageUpload = ({ file, setFile, title, price, id }: ImgaeInterface) => {
  const { url, progress } = useStorage(file, price, title, id);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progres-bar" style={{ width: progress + "%" }}></div>;
};

export default ImageUpload;
