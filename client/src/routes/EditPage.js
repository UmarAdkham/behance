import { useState } from "react";
import { Convert } from "mongo-image-converter";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../style/editPage.scss";
import axios from "axios";
import { useAppSelector } from "../hook/hook";
function Test() {
  const [imageFile, setImageFile] = useState("");
  const id = useAppSelector((state)=>{
    return state.userId.id
  })
  console.log(id)
  const [con, setCon] = useState(
    "https://a5.behance.net/7e18fe61d755ce06370bb4e00997e2bf4ac1c7e5/img/profile/no-image-138.png?cb=264615658"
  );
  const convertImage = async (event) => {
    try {
      const convertedImage = await Convert(imageFile);
      if (convertedImage) {
        // console.log(convertedImage);
        const info = {
          profilRasmi: convertedImage,
        };

        axios.put(`http://localhost:5000/api/user/${id}/photoedit`, info);
        setCon(convertedImage);
      } else {
        console.log("The file is not in format of image/jpeg or image/png");
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <div className="editPage">
      <div className="editCont">
        <div className="imageBox">
          <h4>Asosiy Ma'lumot</h4>
          <img src={`${con}`} alt="" width={100} height={100} />
          <label>
            <span>
              <FaCloudUploadAlt />
            </span>
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </label>

          <button onClick={convertImage}>Yuklash </button>
        </div>

        <div className="userInfo">
          <form>
            <label>
              F.I.O
              <input type="text" name="ism" />
            </label>
            <label>
              Parol
              <input type="password" name="parol" />
            </label>
            <button>Yuklamoq</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
