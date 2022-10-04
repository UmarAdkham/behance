import React, { useState } from "react";
import Uploat from "./Upload";

function UserPhoto() {
  const [photo, setPhoto] = useState("");
  const getPhoto = (photo: any) => {
    console.log(photo);
    
    setPhoto(photo);
  };

  return (
    <div>
      <Uploat getPhoto={getPhoto} />
      <img src={photo} alt="404" />
    </div>
  );
}

export default UserPhoto;