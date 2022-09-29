import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {TbMessageCircle } from "react-icons/tb";
import "../style/main.scss";
const liker = require("../images/thumb-up-fill.png");

const close = require("../images/close-line.png");

function Main() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayModal, setDisplayModal] = useState(false)
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

  const handleClick= () =>{
   setDisplayModal(!displayModal)
  }
  return (
    <div className="mainSec">
      {/* <Button >Open modal</Button> */}
      <img
        src={
          "https://avatars.mds.yandex.net/i?id=393b50c8dfdbb1a1369fc2af730edf4a-4576362-images-thumbs&n=13"
        }
        alt="BigCo Inc. logo"
        width={"600px"}
        onClick={handleOpen}
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
      App
      {/* <Modal/> */}
      <h1>salom</h1>

      <div className="modal">

         <div className="circle" onClick={ handleClick}>
          <span><TbMessageCircle/></span>
         </div>

        <form style={{display:displayModal ? "flex": "none"}}>
          <input type="email" placeholder="emailingizni kiriting" />
          <textarea>
            Test
          </textarea>
        </form>
      </div>


    </div>
  );
}

export default Main;
