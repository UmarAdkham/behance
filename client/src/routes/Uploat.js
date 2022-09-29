import React, { useState } from "react";
import { Convert } from "mongo-image-converter";
import axios from "axios"
function Uploat() {
  const [imageFile, setImageFile] = useState("");
  // const [uploatImg setUploatImg] = useState("")

  const convertImage = async () => {
    try {
      const convertedImage = await Convert(imageFile);
      if (convertedImage) {
        console.log(convertedImage);
        const info = {
          url:convertedImage,
          title:"Test",
          userId:"123"
        }
        axios.post("http://localhost:5000/api/photo/uploat" , info )
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
        <div className="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            alt="404"
          />
        </div>
        <div>
          <input type="file" onChange={handleChange} />
          <button onClick={convertImage}> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default Uploat;
