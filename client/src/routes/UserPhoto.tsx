import React, { useState } from "react";
import Uploat from "./Upload";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
function UserPhoto() {
// m ui setate
  const [progress, setProgress] = React.useState(0);
  const [open, setOpen] = React.useState(false);
// o'zmizni state lar 
  const [photo, setPhoto] = useState("");
  const [haveImgs, setHandleImg] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  //m ui
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 2.3;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
// title ochish uchun
  const handleClickOpen = () => {
    setOpen(true);
  };
// title yopish uchun
  const handleClose = () => {
    setOpen(false);
  };
  //m ui end
// upload page dan foto linkni olish 
  const getPhoto = (photo: any) => {
    setPhoto(photo);
    setTimeout(() => {
      setHandleImg(true);
    }, 3000);
  };
  // axios upload photos
  const handlePost = () => {
    const info = {
      url: `${photo}`,
      title: text,
      userId: "63355b9244485cfbce1faf26",
    };
    axios.post("http://localhost:5000/api/photos/upload", info).then((res) => {
      if (res.status === 200) {
        console.log("uploaded");
      }
    });

    setOpen(false);
  };
  return (
    <div className="add_photo_page">
      <div className="main_photo">
        {photo ? (
          <Box sx={{ width: "50%" }} className={haveImgs ? "none" : "prog"}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        ) : (
          ""
        )}
        <img
          src={photo}
          alt=""
          className={haveImgs ? "haveImg" : "handleImg"}
        />
        {photo ? "" : <Uploat getPhoto={getPhoto} />}
      </div>
      <div className="right_constructor">
        <p className="title">rasim qo'shish</p>
        <div className="components">
          <div className="add_photo_com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/44/44289.png"
              alt=""
            />
          </div>
          <div className="text">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3721/3721901.png"
              alt=""
            />
          </div>
          <div className="nft">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6699/6699366.png"
              alt=""
            />
          </div>
        </div>
        <div className="continue">
          <button
            onClick={handleClickOpen}
            className={haveImgs ? "upload" : "normal"}
          >
            Yuborish
          </button>
          <br />
          <button className={haveImgs ? "context" : "normal"}>Saqlash</button>
        </div>
      </div>

      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
          </Button> */}
        <Dialog open={open} onClose={handlePost}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>Iltmos Rsamiga title yozing</DialogContentText>

            {/* <input type="text" onChange={(e) => setText(e.target.value)} /> */}
            <TextField
              autoFocus
              margin="dense"
              type="text"
              label="Title..."
              onChange={(e) => setText(e.target.value)}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlePost}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default UserPhoto;
