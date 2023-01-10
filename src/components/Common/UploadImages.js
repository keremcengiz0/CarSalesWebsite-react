import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const UploadImages = (props) => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("çagırıldı");
  }, []);

  const handleFileSelection = (e) => {
    e.preventDefault();
    setFiles([...e.target.files]);
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("file", e.target.files[i]);
      formData.append("upload_preset", "carsalesimages");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "carsalesimages");
    }

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/daq3lsarv/image/upload",
        formData,
        { timeout: 20000 }
      );

      if (res.status === 200) {
        setUploadedFiles([...uploadedFiles, res.data]);
        console.log("Resim başarıyla yüklendi!");
        props.getUploadedFiles([res.data]);
      } else {
        console.log("Resim yükleme işlemi başarısız oldu.");
      }
      setLoading(false);
    } catch (err) {
      console.log("Resim yükleme işlemi sırasında bir hata oluştu: " + err);
      setLoading(false);
    }

    console.log(uploadedFiles);
  };

  return (
    <React.Fragment>
      <input type="file" onChange={handleFileSelection} multiple />
      {loading ? (
        <CircularProgress />
      ) : (
        <button onClick={handleUpload}>Upload</button>
      )}{" "}
    </React.Fragment>
  );
};

export default UploadImages;

/*

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/daq3lsarv/image/upload",
        formData
      );

      if (res.status === 200) {
        setUploadedFiles([res.data]);
        props.getUploadedFiles([res.data]);
        console.log("Resim başarıyla yüklendi!");
      } else {
        console.log("Resim yükleme işlemi başarısız oldu.");
      }
    } catch (err) {
      console.log("Resim yükleme işlemi sırasında bir hata oluştu: " + err);
    }
*/
