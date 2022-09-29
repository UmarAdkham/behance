import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerInterface } from "../interface/registerInterface";
import "../style/register.scss";
function Register() {

  let [xat, setXat] = useState('')

  let naviget = useNavigate()
  let [regitesr, setRegister] = useState<registerInterface>({
    email: "",
    familiya: "",
    ism: "",
    parol: "",
  });


  // inputlardan xosil bolayotgan object

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...regitesr, [e.target.name]: e.target.value });
  };


  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/user/register', regitesr)
      .then((res: any) => {
        if (res.data.error) {
          //  apidan kelgan xatolikn ekranga chiqarish
          setXat(res.data.error)
        }
        else {
          naviget('/')
          // apidan kelgan xatolikn ekranga chiqarishni boshatish
          setXat('')
        }
      })
  }

  return (
    <div className="contenerRegister">
      <div className="logo" >
        <h1><span>Be</span> Behance</h1>
      </div>
      <div className="bolaDiv1">
        <h1>Akkaunt ochish </h1>
        <form onSubmit={handelSubmit} >
          <label htmlFor="email">
            Email

            <input
              type="email"
              name="email"
              value={regitesr.email || ""}
              id="email"
              onChange={handelChange}
            />
          </label>
          <div>
            <label htmlFor="ism">
              Ism
              <input
                type="text"
                name="ism"
                value={regitesr.ism || ""}
                id="ism"
                onChange={handelChange}
              />
            </label>

            <label htmlFor="familiya">
              Familiya
              <input
                type="text"
                name="familiya"
                value={regitesr.familiya || ""}
                id="familiya"
                onChange={handelChange}
              />
            </label>
          </div>
          <label htmlFor="parol">
            Parol
            <input
              type="text"
              name="parol"
              value={regitesr.parol || ""}
              id="parol"
              onChange={handelChange}
            />
          </label>
          <button>Davom eting</button>
        </form>
        <p>
          Akkauntgiz bor bolsa <Link to={"/"}>Kirish</Link>
        </p>
        <p>{xat}</p>
      </div>
    </div>
  );
}

export default Register;
