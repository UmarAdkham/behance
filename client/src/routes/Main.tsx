import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../style/main.scss";
import axios from "axios";
import EmailJs from "../components/EmailJs";
import { useAppSelector } from "../hook/hook";
import { useNavigate } from "react-router-dom";


const liker = require("../images/thumb-up-fill.png");

const close = require("../images/close-line.png");

function Main() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const [photos, setPhotos] = React.useState([]);

  const handleOpen = (id: string) => {
    setOpen(true);
    axios.post(`http://localhost:5000/api/photo/${id}}`).then((res) => {});
  };

  let userPhoto =
  useAppSelector((state) => state.user.profilRasmi) ||
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACOCAMAAADHAVDzAAAAb1BMVEX///8jHyDl5eUWERMAAAD8/PwkHiAhHyDr6+vY2Nj09PT4+Pimpqbw8PDf39+jo6PR0dHDw8OXl5eRkZG3t7eDg4Otra0bGRqKiorKyspkY2Q2NjYoJycQDQ4JBgh4eHhXV1dubm5LS0tGREU9PT2dl05dAAAD70lEQVR4nO2biXKrIBRArywKKoKIqLGabv//jc8taZvatM0o6bzhdNppltHjhcsFSQA8Ho/H4/F4PB6Px+PxeDwezy7Q4edPcE8NynjTcHZPhUwe2gh3UXuQ2R2CQYcziuKB4DAMgqDqSFSIezRJjvsqOBMSnDsWGK7Zdu8URqreOrYAi8OPDkEUdY4tOKlOp34XC8JdOiSP+OTw3gI/xg4lDAnCKS/eSYwPiXHnMAbik8QcisSZBI/mC//YMcc/D+56hezWJEaLTjqTKLtLg7NE6UziqQvCLyLx5EzigL/qE93BjcEwZD99LeEuEuVqcwRu+0TafVJYJLC77FAryRFMw1fkbpw4l45LC5cj5lg7ViVc1g6In/GHmrGAn2OXc7xhPnEpEYbTfMLlRFN+HrnDLnUoMF2uJJdzTCLdL8bylry1SBj0bb7oOSUrK7KkKiZROS5/6B2WHpl+6clA/6IHhXssfuarjse1aLw8dG8xnpEmScxEnCSOTz8FYLpsZevH12E93FXR62Nt1ZubC43hV5jyYegLuJrKaVXhoW88lEa4MZhg8rmbhswoeqvpUdV3z9KVhpDn1ByrdzgxDxaY4P01xq5g2tUSeoK8GnpKnb0k4vpyuP5USvs62XfYQq9kmch9SRSRF7Rnlqi2u24wa+BW7aYA2Y8cBouuzWCXEZQCi1anlmvgiO1T1uND/6M4DIRRf4h3SRFNfuQwDRlD79R7BELhb9LiI1E1d84tTei0Cv4NeF4bb9om6uo4uQZRW0vQsv+tRH+cqv52DoDalTXwdaoWbSyxvvC7Dhnn31s2x/HXrTG2B2wZCQrtN7VzjardVAKStfXvN4RBtO2NAlTdEImwQptK8B7fwMZ3/Sm6iT+yVfk/Qn/J/yvh8Xg8Ho/H4/F4PB6Px+PxeCbGLw2ct1gpnG7J0XHDM05OT9Hl1V02pqej6+nT4Ihxdnq6mc+VX2xEjw7MADWJqpGuJaqRrAtb16zgwBumb/u6AQWRolryRjT1eFTLeaosOjRNypS1KqfAU2aNSI1VQAdbXUKuwWQasrQUJaAUmCzYEy2s4uVNgaKgNNOq0KjIVZrpotDcyKRgBSvrxDw1QEuR2zwtUlVSVgDEkh5TC5aD5AXUIBHYzBRaGwm8vrG1RC71EAtV5o3lWmWSMdvUqGZlSW2qJ4k0l6lBZQzJKBEXoshzQDI+sjrWIDSFAhlTG3S8aQOGDsdiSjQsbZhlVuiGJ1yCarhOMs2FUhnTzJhYZXEz9V+rFdfCasMFIB0P/YgjQBwgQWz6NNjOXN8BvTlv5sNSunwyZfl3eYXO6XnOWji9Z87ft+dOj67fcP8HcbA1D7ZhUVQAAAAASUVORK5CYII=";

const sharePhoto = () => {
  navigate("/user/accountPage");
};


  const handleClose = () => setOpen(false);

  const [all, setAll] = React.useState([]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    border: "none",
  };


  React.useEffect(() => {
    axios.get("http://localhost:5000/api/photos/photos").then((res) => {
      setPhotos(res.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="mainSec">
        {/* <img
          src={
            "https://avatars.mds.yandex.net/i?id=393b50c8dfdbb1a1369fc2af730edf4a-4576362-images-thumbs&n=13"
          }
          alt="BigCo Inc. logo"
          width={"600px"}
          onClick={() => {
            handleOpen("6335239a86dca12cd1d5f93d");
          }}
        /> */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="box-modal">
            <div className="bagImage">
              <img
                src={
                  "https://stage.super.ru/upload/20196/60b5214cc32ec4ae5c66b33820bb2b08-1400.jpg"
                }
              />



              <div>
                <div className="likeButton">
                  <img src={liker} />
                </div>
              </div>
              <div className="closeImage">
                <img src={close} onClick={handleClose} />
              </div>
            </div>
          </Box>
        </Modal>

        <div className="main-img-container">
          {photos.length > 0 ? photos.map((photo: any) => {
            return (
              <div className="img-box">
                <img key={photo.userId} src={photo.url} alt="404" />
                <div className="like-view">
                <img onClick={sharePhoto} className="sharePhoto" src={userPhoto}/>
                <p>{photo.title}</p>
                </div>
              </div>
            );
          }) : <img className="preloader" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="404"/> }
        </div>
        <EmailJs />
      </div>
    </>
  );
}

export default Main;
