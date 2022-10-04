import React, { useRef, useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import "../style/emailjs.scss";

function EmailJs() {
  const [displayModal, setDisplayModal] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const handleClick = () => {
    setDisplayModal(!displayModal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="modal">
      <div className="circle" onClick={handleClick}>
        <span>
          <TbMessageCircle />
        </span>
      </div>

      <form
        style={{ display: displayModal ? "flex" : "none" }}
        onSubmit={handleSubmit}
      >
        <input type="email" placeholder="emailingizni kiriting" />
        <textarea>Test</textarea>
      </form>
    </div>
  );
}

export default EmailJs;
