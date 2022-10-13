import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook/hook";
import { loginInterface } from "../interface/registerInterface";
import { setUserId } from "../redux/userIdSlise";
import apple from "../images/apple.png";
import { gapi } from "gapi-script";
// import FacebookLogin from "react-facebook-login";
// import LoginButton from "../components/google_login";
import "../style/login.scss";
import GoogleLogin from "react-google-login";
// import LoginButton from "../components/google-login";
let clientId =
  "376958828328-obualjstu96hflb5i45i90poqhip8a3p.apps.googleusercontent.com";
function Login() {
  let navigate = useNavigate();
  let dispatch = useAppDispatch();
  let [text, setText] = useState("");
  const [user, setUser] = useState<loginInterface>({
    email: "",
    parol: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", user)
      .then((res: any) => {
        if (res.data.user) {
          console.log(res.data.user);
          dispatch(setUserId(res.data.user));
          navigate("/user");
        } else {
          setText("Password yoki user name xato");
        }
      })
      .catch((err) => console.log(err));
  };
  //google
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client", start);
  }, []);
  //endint

  const onSuccess = (res: any) => {
    const auth = {
      ism: res.profileObj.givenName,
      familiya: res.profileObj.givenName,
      email: res.profileObj.email,
      parol: res.profileObj.googleId,
      profilRasmi:
        "https://a5.behance.net/6ea9aa767d8e4bfd4c34068586c9b76450edbdc7/img/profile/no-image-138.png?cb=264615658",
    };
    axios
      .post("http://localhost:5000/api/user/google-login", auth)
      .then((res: any) => {
        if (res.data.user) {
          console.log(res.data.user);
          dispatch(setUserId(res.data.user));
          navigate("/user");
        } else {
          setText("Password yoki user name xato");
        }
      })
      .catch((err) => console.log(err));
  };
  const onFailure = (res: any) => {
    console.log("error of google", res);
  };
  //Facebook button ishlahi
  const componentClicked = (res: any) => {
    console.log("qqq");
    // console.log(res, 'Login');
  };
  const responseFacebook = (res: any) => {
    const pathphoto = {
      ism: res.name,
      familiya: res.name,
      email: res.email,
      parol: res.userID,
      profilRasmi:
        "https://a5.behance.net/6ea9aa767d8e4bfd4c34068586c9b76450edbdc7/img/profile/no-image-138.png?cb=264615658",
    };
    axios
      .post("http://localhost:5000/api/user/facebook-login", pathphoto)
      .then((res: any) => {
        if (res.data.user) {
          dispatch(setUserId(res.data.user));
          navigate("/user");
        } else {
          setText("Password yoki user name xato");
        }
      })
      .catch((err) => console.log(err));
    console.log(res);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
          <div>
            <h1>
              <span>Be</span> Behance
            </h1>
          </div>
          <div className="login-container">
            {/* <LoginButton/> */}
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <p className="btn-socialMedia btn-google">
                {" "}
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Google orqali kirish"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              </p>
              {/* <p className="btn-socialMedia btn-facebook">
                {" "}
                <FacebookLogin
                  appId="435138342104865"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={responseFacebook}
                />
              </p> */}
              <p className="btn-socialMedia btn-apple">
                {" "}
                <img src={apple} alt="404" width={20} height={20} /> Apple
                orqali kirish
              </p>
              <p id="hr">-----------------yoki-------------------</p>
              <input
                type="email"
                name="email"
                value={user.email || ""}
                placeholder="Emailingizni kiriting"
                onChange={handleChange}
              />
              <input
                type="password"
                name="parol"
                value={user.parol || ""}
                placeholder="Parolingizni kiriting"
                onChange={handleChange}
              />

              <p className="link">
                <Link to={"/register"} className="link">
                  Royxatdan o'tish
                </Link>
              </p>

              <p style={{ textAlign: "center" }}>{text}</p>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
