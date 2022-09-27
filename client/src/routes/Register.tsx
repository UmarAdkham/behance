import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerInterface } from "../interface/registerInterface";
import "../style/register.scss";
function Register() {
  let [regitesr, setRegister] = useState<registerInterface>({
    email: "",
    familiya: "",
    ism: "",
    parol: "",
  });

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...regitesr, [e.target.name]: e.target.value });
  };

  return (
    <div className="otaDiv">
      <div className="bolaDiv1">
        <p className="boshlagichQadam">Boshlangich qadam</p>
        <h1>Akkaunt ochish </h1>

        <h1>Elektron pochtangiz orqali registrasiya qiling</h1>
        {/* //path qoyish kerak */}
        <p>
          Akkauntgiz bor bolsa <Link to={"./Login"}>Kirish</Link>
        </p>

        {/* 
<div className="inputlar"> 
     
    <div className="input2"></div>
    
</div> */}

        <form>
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
      </div>

      <div className="bolaDiv"></div>
    </div>
  );
}

export default Register;
