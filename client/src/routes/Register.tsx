import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerInterface } from "../interface/registerInterface";
import "../style/register.scss";
import { gapi } from "gapi-script";
let clientId = "376958828328-obualjstu96hflb5i45i90poqhip8a3p.apps.googleusercontent.com"
function Register() {

  let [xat, setXat] = useState('')

  let naviget = useNavigate()
  let [register, setRegister] = useState<registerInterface>({
    email: "",
    familiya: "",
    ism: "",
    parol: "",
    profilRasmi:'https://a5.behance.net/6ea9aa767d8e4bfd4c34068586c9b76450edbdc7/img/profile/no-image-138.png?cb=264615658',
     createdAt:'',
  });

// google api ga oid  Iltmos teginmang !!!!!
useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  }
  gapi.load("client" , start)

})

// end
  // inputlardan xosil bolayotgan object

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };


  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/user/register', register)
      .then((res: any) => {
        console.log(res.data)
        if (res.data.error) {
          //  apidan kelgan xatolikn ekranga chiqarish
          setXat(res.data.error)
        }
        else {
          naviget('/' , {state:xat})
          // apidan kelgan xatolikni ekranga chiqarishni boshatish
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
        <h1>Akkount ochish </h1>
        <form onSubmit={handelSubmit} >
          <label htmlFor="email">
            Email

            <input
              type="email"
              name="email"
              value={register.email || ""}
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
                value={register.ism || ""}
                id="ism"
                onChange={handelChange}
              />
            </label>

            <label htmlFor="familiya">
              Familiya
              <input
                type="text"
                name="familiya"
                value={register.familiya || ""}
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
              value={register.parol || ""}
              id="parol"
              onChange={handelChange}
            />
          </label>
          <button>Davom eting</button>
        </form>
        
        <div>
        </div>
        <p>

       <Link className="link" to={"/"} ><p>Login</p></Link>
        </p>
        <p>{xat}</p>
      </div>
    </div>
  );
}

export default Register;
