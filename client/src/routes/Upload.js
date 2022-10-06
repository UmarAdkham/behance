import React, { useState } from "react";
import { Convert } from "mongo-image-converter";
import "../style/photoAdd.scss";
// m ui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Uploat(props) {
  const [imageFile, setImageFile] = useState("");
  // const [uploatImg setUploatImg] = useState("")
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <label onClick={handleClickOpen}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/44/44289.png"
            alt="404"
          />
          <input type="file" onChange={handleChange} />
        </label>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Diqqat! <br />
            rsim faqat png va jpn farmatda bo'lishi lozim <br />
           Siz aniq rasmni tanlaganingizga aminmsiz ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ortga</Button>
          <Button onClick={convertImage} autoFocus>
            Ha
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Uploat;
