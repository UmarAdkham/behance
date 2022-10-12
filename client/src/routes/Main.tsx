import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../style/main.scss";
import axios from "axios";
import EmailJs from "../components/EmailJs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const liker = require("../images/thumb-up-fill.png");

const close = require("../images/close-line.png");

function Main() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (id: string) => {
    setOpen(true);
    axios.post(`http://localhost:5000/api/photo/${id}}`).then((res) => {});
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
    // bgcolor: "red",
  };

  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/photos/photos").then((res) => {
      setPhotos(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="mainSec">
        <img
          src={
            "https://avatars.mds.yandex.net/i?id=393b50c8dfdbb1a1369fc2af730edf4a-4576362-images-thumbs&n=13"
          }
          alt="BigCo Inc. logo"
          width={"600px"}
          onClick={() => {
            handleOpen("6335239a86dca12cd1d5f93d");
          }}
        />

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
          { photos.length > 0 ?   photos.map((photo: any) => {
            return (
              <div>
                <img key={photo.userId} src={photo.url} alt="404" />
                <p>{photo.title}</p>
              </div>
            );
          })
        : <h1></h1>}
        </div>
        <EmailJs />
        <Footer />
      </div>
    </>
  );
}

export default Main;
