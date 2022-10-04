import React, { useState } from "react";
import { Convert } from "mongo-image-converter";
import axios from "axios";
import "../style/photoAdd.scss";

function Uploat(props) {
  const [imageFile, setImageFile] = useState("");
  // const [uploatImg setUploatImg] = useState("")

  const convertImage = async () => {
    try {
      const convertedImage = await Convert(imageFile);
      if (convertedImage) {
        // props.getPhoto(convertImage)
        const info = {
          url: convertedImage,
          title: "Test",
          userId: "123",
        };
        axios
          .post("http://localhost:5000/api/photos/upload", info)
          .then((res) => {
            if (res.status === 200) {
              props.getPhoto(convertedImage);
            }
          });
        // after this pass it to the backend using your fav API,
      } else {
        console.log("The file is not in format of image/jpeg or image/png");
      }
    } catch (error) {
      //   console.warn(error.message);
    }
  };
  const handleChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="uploat_img">
      <div className="img_container">
        <div className="icon"></div>
        <div className="ppp">
          <label>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
              alt="404"
            />
            <input type="file" onChange={handleChange} />
            <button onClick={convertImage}>send</button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Uploat;
