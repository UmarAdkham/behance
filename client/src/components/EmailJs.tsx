import React, { useRef, useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import emailjs from '@emailjs/browser';
import "../style/emailjs.scss";

function EmailJs() {
  const [displayModal, setDisplayModal] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const handleClick = () => {
    setDisplayModal(!displayModal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("BEFORE IF")

    if (form.current) {
      console.log("INSIDE IF")

      emailjs.sendForm('service_h1d6in7', 'template_fl6m5ke', form.current, '4NDi_hROu8sXQLfUk')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
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
        ref={form}
      >
        <input type="text" placeholder="Ismingizni kiriting" name="ism"  />
        <input type="email" placeholder="emailingizni kiriting" name="Email" />
        <textarea name="text"></textarea>
        <button>send</button>
      </form>
    </div>
  );
}

export default EmailJs;
