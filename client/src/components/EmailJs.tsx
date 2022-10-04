import React, { useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import "../style/emailjs.scss";

function EmailJs() {
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="modal">
      <div className="circle" onClick={handleClick}>
        <span>
          <TbMessageCircle />
        </span>
      </div>

      <form style={{ display: displayModal ? "flex" : "none" }}>
        <input type="email" placeholder="emailingizni kiriting" />
        <textarea>Test</textarea>
      </form>
    </div>
  );
}

export default EmailJs;
