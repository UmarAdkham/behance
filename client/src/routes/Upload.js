import React, { useState } from "react";
import { Convert } from "mongo-image-converter";
import "../style/photoAdd.scss";

function Uploat(props) {
  const [imageFile, setImageFile] = useState("");
  // const [uploatImg setUploatImg] = useState("")

  const convertImage = async () => {
    try {
      const convertedImageset = await Convert(imageFile);
      if (convertedImageset) {
        props.getPhoto(convertedImageset);
        
        // after this pass it to the backend using your fav API,
      } else {
        console.log("The file is not in format of image/jpeg or image/png");
      }
    } catch (error) {
      console.warn(error.message);
    }
  };
  const handleChange = (e) => {
    setImageFile(e.target.files[0]);
  };
  

  return (
    <div className="uploat_img">
      <div className="img_container">
        <div className="icon"></div>
        <label>
          <img
            src="https://cdn-icons-png.flaticon.com/512/44/44289.png"
            alt="404"
          />
          <input type="file" onChange={handleChange} />
        </label>
      </div>
      <button onClick={convertImage}>Settting</button>
    </div>
  );
}

export default Uploat;
