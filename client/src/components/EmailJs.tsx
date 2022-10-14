import React, { useRef, useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import "../style/emailjs.scss";

function EmailJs() {
  const [displayModal, setDisplayModal] = useState(true);

  const form = useRef<HTMLFormElement>(null);

  const handleClick = () => {
    setDisplayModal(!displayModal);
  };
     
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("BEFORE IF");

    if (form.current) {
      console.log("INSIDE IF");

      emailjs
        .sendForm(
          "service_h1d6in7",
          "template_fl6m5ke",
          form.current,
          "4NDi_hROu8sXQLfUk"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="mainDiv">
      <div
        className="divForm"
        style={{ display: displayModal ? "none" : "block" }}
      >
        <form onSubmit={handleSubmit} ref={form}>
          <input type="text" placeholder="Ismingizni kiriting" name="ism" />
          <input
            type="email"
            placeholder="Emailingizni kiriting"
            name="Email"
          />
          <textarea name="text" placeholder="Fikringiz bilan bo'lishing"></textarea>
          <button>Send</button>
        </form>
      </div>

      <div className="circle" onClick={handleClick}>
        <span>
          <TbMessageCircle />
        </span>
      </div>
    </div>
  );
}

export default EmailJs;
